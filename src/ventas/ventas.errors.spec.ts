import { BadRequestException, NotFoundException } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';

jest.mock('src/prisma/prisma.service', () => ({ PrismaService: class {} }), { virtual: true });
jest.mock('src/sse/sse.service', () => ({ SseService: class {} }), { virtual: true });

describe('Errores de ventas sin conexión a BD', () => {
  beforeEach(() => jest.spyOn(console, 'error').mockImplementation(() => {}));
  afterEach(() => jest.restoreAllMocks());

  it.each([['unitario', 6, 5, 1], ['caja', 2, 5, 3], ['blister', 3, 5, 2]])(
    'explica stock insuficiente para %s y no descuenta existencias',
    async (presentacion, cantidad, stockTotal, factor) => {
      const tx = {
        venta: { findFirst: jest.fn().mockResolvedValue(null), create: jest.fn().mockResolvedValue({ id: 'venta' }) },
        producto: { findUnique: jest.fn().mockResolvedValue({ nombre: 'Producto prueba', cantCaja: factor, cantBlister: presentacion === 'blister' ? factor : 0 }), update: jest.fn() },
        lote: { findUnique: jest.fn().mockResolvedValue({ stockTotal, productoId: 'producto' }), update: jest.fn() },
        listaProductos: { create: jest.fn() },
      };
      const emit = jest.fn();
      const service = new VentasService({ $transaction: (fn: any) => fn(tx) } as any, { emit } as any);
      const result = service.RegistrarVenta({ fecha: '2026-10-29', detalles: [{ productoId: 'producto', loteId: 'lote', nombreProducto: 'Producto prueba', presentacion, cantidad }] } as any);
      await expect(result).rejects.toThrow('Stock insuficiente para Producto prueba');
      expect(tx.lote.update).not.toHaveBeenCalled();
      expect(tx.producto.update).not.toHaveBeenCalled();
      expect(tx.listaProductos.create).not.toHaveBeenCalled();
      expect(emit).not.toHaveBeenCalled();
    },
  );

  it.each([new BadRequestException('Disponible: 5; solicitado: 6'), new NotFoundException('Lote agotado')])(
    'conserva el error de negocio en el controlador', async (error) => {
      const controller = new VentasController({ EditarVenta: jest.fn().mockRejectedValue(error) } as any);
      await expect(controller.editarVenta('venta', { cambios: [] })).rejects.toBe(error);
    },
  );
});

describe('Venta con varios renglones del mismo lote (sin BD)', () => {
  beforeEach(() => jest.spyOn(console, 'error').mockImplementation(() => {}));
  afterEach(() => jest.restoreAllMocks());
  function preparar(stock: number, existeProducto = true, existeLote = true) {
    const lote = { productoId: 'producto', stockTotal: stock };
    const tx = {
      venta: { findFirst: jest.fn().mockResolvedValue(null), create: jest.fn().mockResolvedValue({ id: 'venta' }) },
      producto: {
        findUnique: jest.fn().mockResolvedValue(existeProducto ? { nombre: 'Medicamento', cantCaja: 1, cantBlister: 0 } : null),
        update: jest.fn(),
      },
      lote: {
        findUnique: jest.fn(async () => existeLote ? { ...lote } : null),
        update: jest.fn(async ({ data }) => { lote.stockTotal -= data.stockTotal.decrement; }),
        delete: jest.fn(async () => { existeLote = false; }),
      },
      listaProductos: { create: jest.fn() },
    };
    const emit = jest.fn();
    const service = new VentasService({ $transaction: (fn: any) => fn(tx) } as any, { emit } as any);
    const vender = (cantidades: number[]) => service.RegistrarVenta({
      fecha: '2026-10-29', detalles: cantidades.map(cantidad => ({
        productoId: 'producto', loteId: 'lote', nombreProducto: 'Medicamento', presentacion: 'unitario', cantidad,
      })),
    } as any);
    return { tx, emit, vender, lote };
  }

  it('guarda dos renglones cuando su suma cabe en el lote', async () => {
    const { vender, lote, tx, emit } = preparar(5);
    await expect(vender([2, 3])).resolves.toEqual({ id: 'venta' });
    expect(lote.stockTotal).toBe(0);
    expect(tx.listaProductos.create).toHaveBeenCalledTimes(2);
    expect(tx.lote.delete).toHaveBeenCalledTimes(1);
    expect(emit).toHaveBeenCalledTimes(1);
  });

  it('si un renglón agota el lote, el siguiente informa stock, sin eliminarlo durante la validación', async () => {
    const { vender, tx, emit } = preparar(5);
    await expect(vender([5, 1])).rejects.toThrow('Disponible después de los renglones anteriores: 0 unidades');
    expect(tx.lote.delete).not.toHaveBeenCalled();
    expect(emit).not.toHaveBeenCalled();
  });

  it('detecta exceso acumulado aunque cada renglón por separado cabría', async () => {
    const { vender, tx } = preparar(5);
    await expect(vender([3, 3])).rejects.toThrow('renglón 2');
    expect(tx.lote.delete).not.toHaveBeenCalled();
  });

  it('distingue lote inexistente de producto inexistente', async () => {
    const { vender, tx } = preparar(5, true, false);
    await expect(vender([1])).rejects.toThrow('El producto sí existe');
    expect(tx.producto.update).not.toHaveBeenCalled();
  });

  it('identifica un producto inexistente antes de buscar el lote', async () => {
    const { vender, tx } = preparar(5, false);
    await expect(vender([1])).rejects.toThrow('el producto ya no existe');
    expect(tx.lote.findUnique).not.toHaveBeenCalled();
  });

  it('rechaza un lote de otro medicamento', async () => {
    const { vender, lote } = preparar(5);
    lote.productoId = 'otro-producto';
    await expect(vender([1])).rejects.toThrow('no pertenece a este producto');
  });
});

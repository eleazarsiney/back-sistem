import { VentasService } from './ventas.service';
jest.mock('src/prisma/prisma.service', () => ({ PrismaService: class {} }), { virtual: true });
jest.mock('src/sse/sse.service', () => ({ SseService: class {} }), { virtual: true });

describe('Consistencia de edición (solo simulaciones)', () => {
  it.each([-1, 0, 1.5, NaN, Infinity])('rechaza cantidad inválida al crear: %s antes de iniciar transacción', async cantidad => {
    const prisma = { $transaction: jest.fn() };
    const service = new VentasService(prisma as any, {} as any);
    await expect(service.RegistrarVenta({ detalles: [{ cantidad }] } as any)).rejects.toThrow('entero mayor que cero');
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });
  it.each([-1, 1.5, NaN])('rechaza cantidad inválida al editar: %s', async nuevaCantidad => {
    const prisma = { $transaction: jest.fn() };
    const service = new VentasService(prisma as any, {} as any);
    await expect(service.EditarVenta('v', { cambios: [{ listaProductoId: 'd', nuevaCantidad }] })).rejects.toThrow('entero positivo');
    expect(prisma.$transaction).not.toHaveBeenCalled();
  });
  function setup() {
    const detalle = { id: 'd', productoId: 'p', loteId: 'anterior', presentacion: 'unitario', cantidad: 2, subtotal: 20, subGanancia: 4 };
    const tx = {
      listaProductos: {
        findMany: jest.fn(async () => [{ ...detalle }]),
        update: jest.fn(async ({ data }) => Object.assign(detalle, data)),
        delete: jest.fn(),
      },
      lote: { findUnique: jest.fn(async () => ({ stockTotal: 10, fechaVencimiento: null })), update: jest.fn() },
      producto: { findUnique: jest.fn(async () => ({ cantCaja: 1, cantBlister: 0 })), update: jest.fn() },
      venta: { update: jest.fn(async ({ data }) => ({ id: 'v', ...data })) },
    };
    return { tx, service: new VentasService({ $transaction: fn => fn(tx) } as any, { emit: jest.fn() } as any) };
  }
  it('guarda Q24 y recalcula total al cambiar lote de dos unidades antes vendidas a Q10', async () => {
    const { service, tx } = setup();
    const venta = await service.EditarVenta('v', { cambios: [{ listaProductoId: 'd', nuevaCantidad: 2, nuevoLoteId: 'nuevo', subtotal: 24, subGanancia: 6 }] });
    expect(tx.listaProductos.update).toHaveBeenCalledWith(expect.objectContaining({ data: expect.objectContaining({ subtotal: 24, subGanancia: 6, loteId: 'nuevo' }) }));
    expect(venta.total).toBe(24);
  });
  it('no omite silenciosamente un renglón desconocido', async () => {
    const { service, tx } = setup();
    await expect(service.EditarVenta('v', { cambios: [{ listaProductoId: 'desconocido', nuevaCantidad: 2 }] })).rejects.toThrow('no pertenece a esta venta');
    expect(tx.venta.update).not.toHaveBeenCalled();
  });
  it('conserva cero como instrucción para quitar un renglón existente', async () => {
    const { service, tx } = setup();
    await service.EditarVenta('v', { cambios: [{ listaProductoId: 'd', nuevaCantidad: 0 }] });
    expect(tx.listaProductos.delete).toHaveBeenCalledWith({ where: { id: 'd' } });
  });
});

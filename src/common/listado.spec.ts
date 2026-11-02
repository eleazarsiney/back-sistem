import { opcionesListado, paginaListado } from './listado';
import { VentasService } from '../ventas/ventas.service';
import { ComprasService } from '../compras/compras.service';
jest.mock('src/prisma/prisma.service', () => ({ PrismaService: class {} }), { virtual: true });
jest.mock('src/sse/sse.service', () => ({ SseService: class {} }), { virtual: true });

describe('Listados paginados sin BD', () => {
  it('entrega 50 registros y un cursor cuando existe otro bloque', () => {
    const rows = Array.from({ length: 51 }, (_, i) => ({ id: `id-${i}`, correlativo: 100 - i }));
    const page = paginaListado(rows);
    expect(page.items).toHaveLength(50);
    expect(page.hasMore).toBe(true);
    expect(opcionesListado({ cursor: page.nextCursor! }, []).where.AND).toContainEqual({ OR: [{ correlativo: { lt: 51 } }, { correlativo: 51, id: { lt: 'id-49' } }] });
  });
  it.each([0, 12, 50])('no anuncia otra página para %i resultados', length => {
    const page = paginaListado(Array.from({ length }, (_, i) => ({ id: String(i), correlativo: i })));
    expect(page.hasMore).toBe(false);
    expect(page.nextCursor).toBeNull();
  });
  it('busca en el servidor por número exacto y fecha final inclusiva', () => {
    const options = opcionesListado({ numero: '123', desde: '2026-10-01', hasta: '2026-10-29' }, []);
    expect(options.take).toBe(51);
    expect(options.where.AND).toEqual([{ correlativo: 123 }, { fecha: { gte: new Date('2026-10-01T00:00:00Z'), lt: new Date('2026-10-30T00:00:00Z') } }]);
  });
  it.each([{ cursor: 'incorrecto' }, { numero: 'abc' }, { desde: '2026-02-30' }, { desde: '2026-10-29', hasta: '2026-10-01' }])('rechaza filtros inválidos %j', query => {
    expect(() => opcionesListado(query, [])).toThrow();
  });
  it.each(['venta', 'compra'])('limita la consulta de %s y aplica nombre antes de paginar', async model => {
    const findMany = jest.fn().mockResolvedValue([]);
    const prisma = { [model]: { findMany } } as any;
    const service = model === 'venta' ? new VentasService(prisma, {} as any) : new ComprasService(prisma, {} as any);
    await expect(service.listarPagina({ nombre: 'Ana' })).resolves.toEqual({ items: [], hasMore: false, nextCursor: null });
    expect(findMany).toHaveBeenCalledWith(expect.objectContaining({ take: 51, orderBy: [{ correlativo: 'desc' }, { id: 'desc' }], where: { AND: [{ OR: expect.any(Array) }] } }));
    expect(JSON.stringify(findMany.mock.calls[0][0].where)).toContain('Ana');
  });
});

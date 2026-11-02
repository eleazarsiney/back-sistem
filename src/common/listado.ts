import { BadRequestException } from '@nestjs/common';

export interface ListadoQuery {
  cursor?: string;
  numero?: string;
  nombre?: string;
  desde?: string;
  hasta?: string;
}
const PAGE_SIZE = 50;
export function opcionesListado(query: ListadoQuery, nombres: object[]) {
  const AND: object[] = [];
  if (query.cursor) {
    try {
      const cursor = JSON.parse(Buffer.from(query.cursor, 'base64url').toString());
      if (!Number.isSafeInteger(cursor.correlativo) || typeof cursor.id !== 'string' || !cursor.id) throw new Error();
      AND.push({ OR: [{ correlativo: { lt: cursor.correlativo } }, { correlativo: cursor.correlativo, id: { lt: cursor.id } }] });
    } catch { throw new BadRequestException('La página solicitada no es válida. Reinicia la búsqueda.'); }
  }
  if (query.numero?.trim()) {
    if (!/^\d+$/.test(query.numero.trim()) || Number(query.numero) > 2147483647) throw new BadRequestException('Escribe el número completo de la venta o compra.');
    AND.push({ correlativo: Number(query.numero) });
  }
  if (query.nombre?.trim()) AND.push({ OR: nombres });
  const fecha: { gte?: Date; lt?: Date } = {};
  for (const key of ['desde', 'hasta'] as const) {
    if (!query[key]) continue;
    const value = query[key]!;
    const date = new Date(`${value}T00:00:00.000Z`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || !Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== value) throw new BadRequestException('La fecha de búsqueda no es válida.');
    if (key === 'desde') fecha.gte = date;
    else { date.setUTCDate(date.getUTCDate() + 1); fecha.lt = date; }
  }
  if (fecha.gte && fecha.lt && fecha.gte >= fecha.lt) throw new BadRequestException('La fecha inicial debe ser anterior o igual a la final.');
  if (Object.keys(fecha).length) AND.push({ fecha });
  return { where: { AND }, orderBy: [{ correlativo: 'desc' as const }, { id: 'desc' as const }], take: PAGE_SIZE + 1 };
}
export function paginaListado<T extends { id: string; correlativo: number }>(rows: T[]) {
  const items = rows.slice(0, PAGE_SIZE);
  const last = items.at(-1);
  const hasMore = rows.length > PAGE_SIZE;
  return { items, hasMore, nextCursor: hasMore && last ? Buffer.from(JSON.stringify({ correlativo: last.correlativo, id: last.id })).toString('base64url') : null };
}

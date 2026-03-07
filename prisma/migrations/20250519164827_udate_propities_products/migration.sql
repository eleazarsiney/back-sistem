/*
  Warnings:

  - Added the required column `total` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetalleCompra" ADD COLUMN     "total" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "PagosRealizados" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3),
    "monto" DOUBLE PRECISION NOT NULL,
    "compraId" TEXT NOT NULL,

    CONSTRAINT "PagosRealizados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PagosRealizadosVentas" (
    "id" TEXT NOT NULL,
    "fecha" TIMESTAMP(3),
    "monto" DOUBLE PRECISION NOT NULL,
    "ventaId" TEXT NOT NULL,

    CONSTRAINT "PagosRealizadosVentas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PagosRealizados" ADD CONSTRAINT "PagosRealizados_compraId_fkey" FOREIGN KEY ("compraId") REFERENCES "DetalleCompra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagosRealizadosVentas" ADD CONSTRAINT "PagosRealizadosVentas_ventaId_fkey" FOREIGN KEY ("ventaId") REFERENCES "Venta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

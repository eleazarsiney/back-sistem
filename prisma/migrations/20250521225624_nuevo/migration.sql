/*
  Warnings:

  - You are about to drop the column `fechaPago` on the `DetalleCompra` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `PagosRealizados` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `PagosRealizadosVentas` table. All the data in the column will be lost.
  - You are about to drop the column `fechaPago` on the `Venta` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DetalleCompra" DROP COLUMN "fechaPago",
ADD COLUMN     "fechaDePago" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "PagosRealizados" DROP COLUMN "fecha",
ADD COLUMN     "fechaPago" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "PagosRealizadosVentas" DROP COLUMN "fecha",
ADD COLUMN     "fechaPago" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "fechaPago",
ADD COLUMN     "fechaDePago" TIMESTAMP(3);

/*
  Warnings:

  - You are about to drop the column `estado` on the `DetalleVenta` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `DetalleVenta` table. All the data in the column will be lost.
  - You are about to drop the column `fechaPago` on the `DetalleVenta` table. All the data in the column will be lost.
  - You are about to drop the column `noVenta` on the `DetalleVenta` table. All the data in the column will be lost.
  - You are about to drop the column `precioUnitario` on the `DetalleVenta` table. All the data in the column will be lost.
  - Added the required column `presentacion` to the `DetalleVenta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaVencimiento` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Venta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaPago` to the `Venta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sucursal` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetalleVenta" DROP COLUMN "estado",
DROP COLUMN "fecha",
DROP COLUMN "fechaPago",
DROP COLUMN "noVenta",
DROP COLUMN "precioUnitario",
ADD COLUMN     "presentacion" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "fechaVencimiento" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Venta" ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "fechaPago" TEXT NOT NULL,
ADD COLUMN     "sucursal" TEXT NOT NULL;

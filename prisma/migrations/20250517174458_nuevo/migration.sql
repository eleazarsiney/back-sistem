/*
  Warnings:

  - Added the required column `blCompra` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blister` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cJCompra` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `caja` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sucursal` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `blCompra` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cJCompra` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetalleCompra" ADD COLUMN     "blCompra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "blister" INTEGER NOT NULL,
ADD COLUMN     "cJCompra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "caja" INTEGER NOT NULL,
ADD COLUMN     "sucursal" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "blCompra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "cJCompra" DOUBLE PRECISION NOT NULL;

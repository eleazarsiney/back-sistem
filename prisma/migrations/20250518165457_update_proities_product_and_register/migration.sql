/*
  Warnings:

  - You are about to drop the column `blCompra` on the `DetalleCompra` table. All the data in the column will be lost.
  - You are about to drop the column `blister` on the `DetalleCompra` table. All the data in the column will be lost.
  - You are about to drop the column `cJCompra` on the `DetalleCompra` table. All the data in the column will be lost.
  - You are about to drop the column `caja` on the `DetalleCompra` table. All the data in the column will be lost.
  - You are about to drop the column `cantidad` on the `DetalleCompra` table. All the data in the column will be lost.
  - You are about to drop the column `costoUnitario` on the `DetalleCompra` table. All the data in the column will be lost.
  - You are about to drop the column `nombreProducto` on the `DetalleCompra` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `DetalleCompra` table. All the data in the column will be lost.
  - The `fechaPago` column on the `DetalleCompra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `blCompra` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `blister` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `cJCompra` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `caja` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `precio` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `precioCompra` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Producto` table. All the data in the column will be lost.
  - The `fechaVencimiento` column on the `Producto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[codigoBarras]` on the table `Producto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `costoCompraBlister` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costoCompraCaja` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costoCompraUnitario` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nompreProducto` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioBlister` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioCaja` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioUnitario` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costoCompraBlister` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costoCompraCaja` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costoCompraUnitario` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioBlister` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioCaja` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioUnitario` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetalleCompra" DROP COLUMN "blCompra",
DROP COLUMN "blister",
DROP COLUMN "cJCompra",
DROP COLUMN "caja",
DROP COLUMN "cantidad",
DROP COLUMN "costoUnitario",
DROP COLUMN "nombreProducto",
DROP COLUMN "total",
ADD COLUMN     "costoCompraBlister" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "costoCompraCaja" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "costoCompraUnitario" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "nompreProducto" TEXT NOT NULL,
ADD COLUMN     "precioBlister" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "precioCaja" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "precioUnitario" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "stockPorBlister" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stockPorCaja" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stockTotal" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "estado" SET DEFAULT 'pendiente',
DROP COLUMN "fechaPago",
ADD COLUMN     "fechaPago" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Producto" DROP COLUMN "blCompra",
DROP COLUMN "blister",
DROP COLUMN "cJCompra",
DROP COLUMN "caja",
DROP COLUMN "precio",
DROP COLUMN "precioCompra",
DROP COLUMN "stock",
ADD COLUMN     "costoCompraBlister" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "costoCompraCaja" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "costoCompraUnitario" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "precioBlister" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "precioCaja" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "precioUnitario" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "stockPorBlister" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stockPorCaja" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stockTotal" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "fechaVencimiento",
ADD COLUMN     "fechaVencimiento" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "CodigoDeBarras" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigoBarras" TEXT NOT NULL,

    CONSTRAINT "CodigoDeBarras_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CodigoDeBarras_codigoBarras_key" ON "CodigoDeBarras"("codigoBarras");

-- CreateIndex
CREATE UNIQUE INDEX "Producto_codigoBarras_key" ON "Producto"("codigoBarras");

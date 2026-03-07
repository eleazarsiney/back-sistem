/*
  Warnings:

  - The primary key for the `DetalleVenta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nombreMedicamento` on the `DetalleVenta` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Venta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Venta` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[noVenta]` on the table `Venta` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `noVenta` to the `DetalleVenta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreProducto` to the `DetalleVenta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productoId` to the `DetalleVenta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DetalleVenta" DROP CONSTRAINT "DetalleVenta_ventaId_fkey";

-- AlterTable
ALTER TABLE "DetalleVenta" DROP CONSTRAINT "DetalleVenta_pkey",
DROP COLUMN "nombreMedicamento",
ADD COLUMN     "noVenta" TEXT NOT NULL,
ADD COLUMN     "nombreProducto" TEXT NOT NULL,
ADD COLUMN     "productoId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "ventaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "DetalleVenta_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "DetalleVenta_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "rol" DROP DEFAULT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_pkey",
DROP COLUMN "createdAt",
ADD COLUMN     "noVenta" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "total" SET DEFAULT 0,
ADD CONSTRAINT "Venta_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Venta_id_seq";

-- CreateTable
CREATE TABLE "Producto" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "codigoBarras" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetalleCompra" (
    "id" TEXT NOT NULL,
    "proveedor" TEXT NOT NULL,
    "productoId" TEXT NOT NULL,
    "nombreProducto" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "costoUnitario" DOUBLE PRECISION NOT NULL,
    "noCompra" SERIAL NOT NULL,
    "precioVenta" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DetalleCompra_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DetalleCompra_noCompra_key" ON "DetalleCompra"("noCompra");

-- CreateIndex
CREATE UNIQUE INDEX "Venta_noVenta_key" ON "Venta"("noVenta");

-- AddForeignKey
ALTER TABLE "DetalleVenta" ADD CONSTRAINT "DetalleVenta_ventaId_fkey" FOREIGN KEY ("ventaId") REFERENCES "Venta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

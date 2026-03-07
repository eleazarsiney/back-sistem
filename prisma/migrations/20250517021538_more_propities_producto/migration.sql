/*
  Warnings:

  - Added the required column `origen` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origen` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetalleCompra" ADD COLUMN     "origen" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "origen" TEXT NOT NULL;

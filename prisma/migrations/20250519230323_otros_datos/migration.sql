/*
  Warnings:

  - You are about to drop the column `sucursal` on the `DetalleCompra` table. All the data in the column will be lost.
  - You are about to drop the column `sucursal` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `sucursal` on the `Venta` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DetalleCompra" DROP COLUMN "sucursal";

-- AlterTable
ALTER TABLE "Producto" DROP COLUMN "sucursal";

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "sucursal";

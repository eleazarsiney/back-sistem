/*
  Warnings:

  - Added the required column `cantBlister` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cantCaja` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetalleCompra" ADD COLUMN     "cantBlister" INTEGER NOT NULL,
ADD COLUMN     "cantCaja" INTEGER NOT NULL;

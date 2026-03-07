/*
  Warnings:

  - Added the required column `cantBlister` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cantCaja` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "cantBlister" INTEGER NOT NULL,
ADD COLUMN     "cantCaja" INTEGER NOT NULL;

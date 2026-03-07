/*
  Warnings:

  - The `fechaPago` column on the `Venta` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "fechaPago",
ADD COLUMN     "fechaPago" TIMESTAMP(3);

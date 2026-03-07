/*
  Warnings:

  - You are about to drop the column `nompreProducto` on the `DetalleCompra` table. All the data in the column will be lost.
  - Added the required column `dineroPendiente` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreProducto` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dineroPendiente` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetalleCompra" DROP COLUMN "nompreProducto",
ADD COLUMN     "dineroPendiente" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "nombreProducto" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Venta" ADD COLUMN     "dineroPendiente" DOUBLE PRECISION NOT NULL;

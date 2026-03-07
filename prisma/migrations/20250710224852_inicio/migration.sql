/*
  Warnings:

  - You are about to drop the column `fechaVencimiento` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `origen` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `stockPorBlister` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `stockPorCaja` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `stockTotal` on the `Producto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Producto" DROP COLUMN "fechaVencimiento",
DROP COLUMN "origen",
DROP COLUMN "stockPorBlister",
DROP COLUMN "stockPorCaja",
DROP COLUMN "stockTotal";

-- CreateTable
CREATE TABLE "Lote" (
    "id" TEXT NOT NULL,
    "origen" TEXT NOT NULL,
    "productoId" TEXT NOT NULL,
    "fechaVencimiento" TIMESTAMP(3),
    "stockTotal" INTEGER NOT NULL DEFAULT 0,
    "stockPorCaja" INTEGER NOT NULL DEFAULT 0,
    "stockPorBlister" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lote" ADD CONSTRAINT "Lote_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

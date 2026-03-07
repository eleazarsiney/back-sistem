/*
  Warnings:

  - You are about to drop the column `codigoDeBarras` on the `Lote` table. All the data in the column will be lost.
  - Added the required column `productoId` to the `CodigoDeBarras` table without a default value. This is not possible if the table is not empty.
  - Made the column `codigoBarras` on table `CodigoDeBarras` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Lote" DROP CONSTRAINT "Lote_codigoDeBarras_fkey";

-- DropIndex
DROP INDEX "CodigoDeBarras_codigoBarras_key";

-- AlterTable
ALTER TABLE "CodigoDeBarras" ADD COLUMN     "productoId" TEXT NOT NULL,
ALTER COLUMN "codigoBarras" SET NOT NULL;

-- AlterTable
ALTER TABLE "Lote" DROP COLUMN "codigoDeBarras",
ADD COLUMN     "codigoBarrasId" TEXT;

-- AddForeignKey
ALTER TABLE "Lote" ADD CONSTRAINT "Lote_codigoBarrasId_fkey" FOREIGN KEY ("codigoBarrasId") REFERENCES "CodigoDeBarras"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "CodigoDeBarras" ALTER COLUMN "codigoBarras" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Lote" ADD COLUMN     "codigoDeBarras" TEXT;

-- AddForeignKey
ALTER TABLE "Lote" ADD CONSTRAINT "Lote_codigoDeBarras_fkey" FOREIGN KEY ("codigoDeBarras") REFERENCES "CodigoDeBarras"("codigoBarras") ON DELETE SET NULL ON UPDATE CASCADE;

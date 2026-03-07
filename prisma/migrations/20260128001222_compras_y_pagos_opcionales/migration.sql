-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_proveedorId_fkey";

-- DropForeignKey
ALTER TABLE "PagosRealizadosCompra" DROP CONSTRAINT "PagosRealizadosCompra_proveedorId_fkey";

-- AlterTable
ALTER TABLE "Compra" ALTER COLUMN "proveedorId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PagosRealizadosCompra" ALTER COLUMN "proveedorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_proveedorId_fkey" FOREIGN KEY ("proveedorId") REFERENCES "Proveedor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagosRealizadosCompra" ADD CONSTRAINT "PagosRealizadosCompra_proveedorId_fkey" FOREIGN KEY ("proveedorId") REFERENCES "Proveedor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

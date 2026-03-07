/*
  Warnings:

  - You are about to drop the column `vencimiento` on the `ListaProductos` table. All the data in the column will be lost.
  - You are about to drop the column `cliente` on the `Venta` table. All the data in the column will be lost.
  - Added the required column `Departamento` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Municipio` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correlativo` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encargado` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correlativo` to the `Compra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioCosto` to the `DetalleDeCompras` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loteId` to the `ListaProductos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correlativo` to the `Proveedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encargado` to the `Proveedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correlativo` to the `Venta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreCliente` to the `Venta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cliente" ADD COLUMN     "Departamento" TEXT NOT NULL,
ADD COLUMN     "Municipio" TEXT NOT NULL,
ADD COLUMN     "correlativo" INTEGER NOT NULL,
ADD COLUMN     "encargado" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Compra" ADD COLUMN     "correlativo" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "DetalleDeCompras" ADD COLUMN     "precioCosto" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "ListaProductos" DROP COLUMN "vencimiento",
ADD COLUMN     "fechaDeVencimiento" TIMESTAMP(3),
ADD COLUMN     "loteId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PagosRealizadosVentas" ADD COLUMN     "clienteId" TEXT;

-- AlterTable
ALTER TABLE "Proveedor" ADD COLUMN     "correlativo" INTEGER NOT NULL,
ADD COLUMN     "encargado" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "cliente",
ADD COLUMN     "clienteId" TEXT,
ADD COLUMN     "correlativo" INTEGER NOT NULL,
ADD COLUMN     "nombreCliente" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Venta" ADD CONSTRAINT "Venta_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagosRealizadosVentas" ADD CONSTRAINT "PagosRealizadosVentas_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;

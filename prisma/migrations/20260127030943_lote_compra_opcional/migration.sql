/*
  Warnings:

  - You are about to drop the column `ventaId` on the `PagosRealizadosVentas` table. All the data in the column will be lost.
  - You are about to drop the column `dineroPendiente` on the `Venta` table. All the data in the column will be lost.
  - You are about to drop the `DetalleCompra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PagosRealizados` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nombre` to the `Lote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alertaStock` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `casa` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `costo` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `generico` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gramaje` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioVenta` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presentacion` to the `Producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Departamento` to the `Proveedor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Municipio` to the `Proveedor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PagosRealizados" DROP CONSTRAINT "PagosRealizados_compraId_fkey";

-- DropForeignKey
ALTER TABLE "PagosRealizadosVentas" DROP CONSTRAINT "PagosRealizadosVentas_ventaId_fkey";

-- AlterTable
ALTER TABLE "Casas" ADD COLUMN     "productoId" TEXT;

-- AlterTable
ALTER TABLE "Lote" ADD COLUMN     "compraId" TEXT,
ADD COLUMN     "nombre" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PagosRealizadosVentas" DROP COLUMN "ventaId";

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "alertaStock" BOOLEAN NOT NULL,
ADD COLUMN     "casa" TEXT NOT NULL,
ADD COLUMN     "costo" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "generico" TEXT NOT NULL,
ADD COLUMN     "gramaje" TEXT NOT NULL,
ADD COLUMN     "precioVenta" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "presentacion" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Proveedor" ADD COLUMN     "Departamento" TEXT NOT NULL,
ADD COLUMN     "Municipio" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Venta" DROP COLUMN "dineroPendiente";

-- DropTable
DROP TABLE "DetalleCompra";

-- DropTable
DROP TABLE "PagosRealizados";

-- CreateTable
CREATE TABLE "Compra" (
    "id" TEXT NOT NULL,
    "Proveedor" TEXT NOT NULL,
    "proveedorId" TEXT NOT NULL,
    "observaciones" TEXT NOT NULL,
    "Comprador" TEXT NOT NULL,
    "visitador" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'sin difinir',
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PagosRealizadosCompra" (
    "id" TEXT NOT NULL,
    "fechaPago" TIMESTAMP(3),
    "monto" DOUBLE PRECISION NOT NULL,
    "proveedorId" TEXT NOT NULL,

    CONSTRAINT "PagosRealizadosCompra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetalleDeCompras" (
    "id" TEXT NOT NULL,
    "compraId" TEXT NOT NULL,
    "productoId" TEXT NOT NULL,
    "stockTotal" INTEGER NOT NULL DEFAULT 0,
    "stockPorCaja" INTEGER NOT NULL DEFAULT 0,
    "stockPorBlister" INTEGER NOT NULL DEFAULT 0,
    "fecha" TIMESTAMP(3) NOT NULL,
    "fechaDeVencimiento" TIMESTAMP(3) NOT NULL,
    "origen" TEXT NOT NULL,
    "nombreProducto" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "DetalleDeCompras_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Casas" ADD CONSTRAINT "Casas_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Producto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lote" ADD CONSTRAINT "Lote_compraId_fkey" FOREIGN KEY ("compraId") REFERENCES "Compra"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Compra" ADD CONSTRAINT "Compra_proveedorId_fkey" FOREIGN KEY ("proveedorId") REFERENCES "Proveedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PagosRealizadosCompra" ADD CONSTRAINT "PagosRealizadosCompra_proveedorId_fkey" FOREIGN KEY ("proveedorId") REFERENCES "Proveedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetalleDeCompras" ADD CONSTRAINT "DetalleDeCompras_compraId_fkey" FOREIGN KEY ("compraId") REFERENCES "Compra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

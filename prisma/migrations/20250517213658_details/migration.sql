/*
  Warnings:

  - You are about to drop the `DetalleVenta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DetalleVenta" DROP CONSTRAINT "DetalleVenta_ventaId_fkey";

-- DropTable
DROP TABLE "DetalleVenta";

-- CreateTable
CREATE TABLE "ListaProductos" (
    "id" TEXT NOT NULL,
    "ventaId" TEXT NOT NULL,
    "presentacion" TEXT NOT NULL,
    "productoId" TEXT NOT NULL,
    "nombreProducto" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "ListaProductos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ListaProductos" ADD CONSTRAINT "ListaProductos_ventaId_fkey" FOREIGN KEY ("ventaId") REFERENCES "Venta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

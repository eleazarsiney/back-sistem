/*
  Warnings:

  - A unique constraint covering the columns `[codigoBarras]` on the table `Producto` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Producto_codigoBarras_key" ON "Producto"("codigoBarras");

/*
  Warnings:

  - Added the required column `estado` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaPago` to the `DetalleCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `DetalleVenta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaPago` to the `DetalleVenta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DetalleCompra" ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "fechaPago" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "DetalleVenta" ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "fechaPago" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Proveedor" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cliente" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Casas" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Casas_pkey" PRIMARY KEY ("id")
);

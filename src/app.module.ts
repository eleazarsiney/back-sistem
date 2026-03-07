import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CasasModule } from './casas/casas.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ComprasModule } from './compras/compras.module';
import { VentasModule } from './ventas/ventas.module';
import { PagosCompraModule } from './pagosCompras/pagos-compra.module';
import { PagosVentaModule } from './pagoVentas/pagos-ventas.module';
import { SseModule } from './sse/sse.module';

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    ProductsModule,
    CasasModule,
    ClientesModule,
    ProveedoresModule,
    ComprasModule,
    VentasModule,
    PagosCompraModule,
    PagosVentaModule,
    SseModule, // ← NUEVO
  ],
})
export class AppModule { }
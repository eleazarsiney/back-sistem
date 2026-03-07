import { Controller, Get, Post, Body, Param, Query, Delete, Put, Logger } from '@nestjs/common';
import { ProductsService } from './products.service';
import { NuevoProductoCompletoDto, PropiedadesNuevoProductoDto } from './updateProduc.dto';

@Controller('productos')
export class ProductsController {
    private readonly logger = new Logger(ProductsController.name);

    constructor(private readonly productsService: ProductsService) { }

    // ── Rutas estáticas primero ──────────────────────────────
    @Get()
    async getAllProducts() {
        return this.productsService.getProducts();
    }

    @Get('todos-los-codigos')
    async getAllCodes() {
        return this.productsService.getAllCodes();
    }

    @Get('buscar')
    async buscarPorNombre(@Query('nombre') nombre: string) {
        if (!nombre || nombre.trim() === '') return [];
        return this.productsService.getProductName(nombre);
    }

    @Get('buscar-codigo')
    async buscarPorCodigo(@Query('codigo') codigo: string) {
        if (!codigo || codigo.trim() === '') return [];
        return this.productsService.getProductCode(codigo);
    }

    // Actualizar lote existente — estático antes de :id
    @Put('lotes/:loteId')
    async updateLote(
        @Param('loteId') loteId: string,
        @Body() data: { fechaVencimiento?: string | null; stockTotal?: number }
    ): Promise<any> {
        return this.productsService.updateLote(loteId, data);
    }

    // ✅ NUEVO: Crear lote manual para un producto
    @Post('lotes')
    async crearLote(
        @Body() data: {
            productoId: string;
            stockTotal: number;
            fechaVencimiento?: string | null;
            nombre?: string;
            origen?: string;
        }
    ): Promise<any> {
        return this.productsService.crearLoteManual(data);
    }

    // ── Rutas dinámicas al final ─────────────────────────────
    @Post()
    async crearProducto(@Body() data: NuevoProductoCompletoDto) {
        this.logger.log('Datos recibidos para nuevo producto:', JSON.stringify(data));
        return this.productsService.RegistrarNuevoProducto(data);
    }

    @Get(':id')
    async getProduct(@Param('id') id: string): Promise<any> {
        return this.productsService.getProduct(id);
    }

    @Put(':id')
    async updateProduct(
        @Param('id') id: string,
        @Body() data: PropiedadesNuevoProductoDto
    ): Promise<any> {
        return this.productsService.updateProduct(id, data);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string): Promise<any> {
        return this.productsService.deleteProduct(id);
    }
}
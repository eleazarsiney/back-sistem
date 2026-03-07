import { Body, Controller,Post,Get,Put,Delete, Param} from '@nestjs/common';
import { CasasService } from './casas.service';
import { Casas } from 'generated/prisma';
@Controller('casas')
export class CasasController {
    constructor(private readonly casaService: CasasService){}
    @Post()
    create(@Body() crearCasa:Casas){
        return this.casaService.createCasa(crearCasa)
    }

    @Get()
    getCasas(){
        return this.casaService.obtenerCasas()
    }
    @Put('id')
    update(@Param('id') id: string,@Body() data: {nombre: string}){
        return this.casaService.updateCasa(id,data)
    }
    @Delete('id')
    delete(@Param('id') id: string){
        return this.casaService.deleteCasa(id)
    }
}

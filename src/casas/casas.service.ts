import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Casas } from 'generated/prisma';
@Injectable()
export class CasasService {
    constructor(private readonly prisma:PrismaService){}

    async createCasa(data:Casas){
        return this.prisma.casas.create({data})
    }

    async obtenerCasas():Promise<Casas[]>{
        return this.prisma.casas.findMany()
    }
    
    async obtenerCasa(id: string): Promise<Casas | null>{
        return this.prisma.casas.findUnique({where:{id}})
    }

    async updateCasa(id:string, data: {nombre:string}){
        return this.prisma.casas.update({where: {id}, data})
    }

    async deleteCasa(id:string){
        return this.prisma.casas.delete({where: {id}})
    }
}

import { Module } from '@nestjs/common';
import { CasasService } from './casas.service';
import { CasasController } from './casas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  providers: [CasasService],
  controllers: [CasasController]
})
export class CasasModule {}

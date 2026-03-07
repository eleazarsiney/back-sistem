import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SseModule } from 'src/sse/sse.module';

@Module({
  imports: [PrismaModule, SseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule { }
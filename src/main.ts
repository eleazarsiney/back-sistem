import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔥 Habilitar CORS para permitir peticiones desde tu frontend (vite, React, etc.)
  app.enableCors({
    origin: true, // o true para todos los orígenes en desarrollo
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  // (Opcional) Prefijo global para todas las rutas
  // app.setGlobalPrefix('api');
  app.setGlobalPrefix('api')
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

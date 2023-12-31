import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  await app.listen(3001);
}
bootstrap();

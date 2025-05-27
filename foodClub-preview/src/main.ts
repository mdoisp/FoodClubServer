import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const port = 3000;
  
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  // Habilitar CORS
  app.enableCors();
  
  const config = new DocumentBuilder()
    .setTitle('Food Club')
    .setDescription('Food Club API')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(port);
  logger.log(`🚀 Aplicação está rodando na porta: ${port}`);
  logger.log(`📚 Swagger disponível em: http://localhost:${port}/api`);
}
bootstrap();

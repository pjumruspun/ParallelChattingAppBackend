import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Parallel Project 2020')
    .setDescription('Live API Documentation for parallel project, by Phatcharapon Jumruspun')
    .setVersion('1.0')
    .addTag('Clients')
    .addTag('Groups')
    .addTag('Messages')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
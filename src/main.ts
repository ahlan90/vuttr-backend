import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

function swaggerConfig(app) {
  const options = new DocumentBuilder()
  .setTitle('VUTTR API')
  .setDescription('This is the API documentation about VUTTR (Very Useful Tools to Remember).')
  .setVersion('1.0')
  .addTag('tools')
  .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {

  const app = await NestFactory.create(AppModule, { cors: true });

  swaggerConfig(app);

  await app.listen(process.env.PORT || 3000);
}

bootstrap();

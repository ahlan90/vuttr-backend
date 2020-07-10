import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

function swaggerConfi(app) {
  const options = new DocumentBuilder()
  .setTitle('VUTTR API')
  .setDescription('This is the API documentation about VUTTR (Very Useful Tools to Remember).')
  .setVersion('1.0')
  .addTag('tools')
  .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);
}

async function bootstrap() {

  const app = await NestFactory.create(AppModule, { cors: true });

  swaggerConfi(app);

  await app.listen(process.env.PORT || 3000);
}

bootstrap();

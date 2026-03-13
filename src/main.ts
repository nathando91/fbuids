import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('FBUID API')
    .setDescription(
      'API tra cứu thông tin Facebook theo UID, số điện thoại, hoặc username.\n\n' +
      '### Endpoints\n' +
      '- **POST /uid2phone** — Tra cứu thông tin từ Facebook UID\n' +
      '- **POST /phone2uid** — Tra cứu thông tin từ số điện thoại\n' +
      '- **POST /username2uid** — Tra cứu thông tin từ username\n'
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {
    jsonDocumentUrl: '/api-json',
  });

  await app.listen(3000);
}

bootstrap();

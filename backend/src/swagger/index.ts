import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function SetupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Product Selling API')
    .setDescription(
      'The Product Selling API allows users to manage and sell products through an e-commerce platform. It provides endpoints for creating, retrieving, updating, and deleting products, as well as handling orders and inventory management.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
}

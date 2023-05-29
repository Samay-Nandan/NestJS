import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { readFile, copyFile } from 'fs/promises';
import { join } from 'path';

export async function SetupSwagger(app: INestApplication): Promise<void> {
  const options = new DocumentBuilder()
    .setTitle('Product Selling API')
    .setDescription(
      'The Product Selling API allows users to manage and sell products through an e-commerce platform. It provides endpoints for creating, retrieving, updating, and deleting products, as well as handling orders and inventory management.',
    )
    .setVersion('1.0')
    .build();

  const distSwaggerPath = join(process.cwd(), 'dist/src/swagger/index.css');
  const mainSwaggerPath = join(process.cwd(), 'src/swagger/index.css');
  await copyFile(mainSwaggerPath, distSwaggerPath);
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document, {
    customCss: await readFile(distSwaggerPath, 'utf-8'),
  });
}

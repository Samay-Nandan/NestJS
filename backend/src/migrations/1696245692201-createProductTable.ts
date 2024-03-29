import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProductTable1696245692201 implements MigrationInterface {
  name = 'CreateProductTable1696245692201';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "products" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" text NOT NULL,
                "description" text NOT NULL,
                "price" money NOT NULL,
                "quantity" integer NOT NULL,
                "image" text NOT NULL,
                "createdAt" date NOT NULL DEFAULT now(),
                "updatedAt" date NOT NULL DEFAULT now(),
                CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "products"
        `);
  }
}

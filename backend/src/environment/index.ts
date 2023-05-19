import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
config();

export const { PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE } =
  process.env;

export const TypeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  entities: ['dist/**/*.entity.{js,ts}'],
  migrations: ['migrations/*.{js,ts}'],
};

export default new DataSource(TypeOrmConfig);

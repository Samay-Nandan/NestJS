import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();

export const { PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE } =
  process.env;

export const TypeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
};

export default new DataSource(TypeOrmConfig);

import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
config();

export const {
  PORT,
  NODE_ENV,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
} = process.env;

export const TypeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
};

export const GetEnvironment = NODE_ENV === 'development' ? true : false;

export default new DataSource(TypeOrmConfig);

import { DataSource, DataSourceOptions } from 'typeorm';
import {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
} from '../enivronment';

export const TypeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  entities: ['dist/src/httpApi/**/entities/*.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
};

export default new DataSource(TypeOrmConfig);

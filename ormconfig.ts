import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { config } from 'dotenv';
config();

const dataSourceDefaultOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || '3306',
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  type: (process.env.DB_CONNECTION as any) || 'mysql',
  database: process.env.DB_DATABASE || '',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['dist/src/database/migrations/*.js'],
  factories: ['dist/src/database/factories/*.factory{.ts,.js}'],
  seeds: ['dist/src/database/seeders/*.js'],
  namingStrategy: new SnakeNamingStrategy(),
  autoLoadEntities: true,
  cli: {
    entitiesDir: 'src',
    subscribersDir: 'src',
    migrationsDir: 'src/database/migrations',
  },
  timezone: 'local',
};

export const AppDataSource = new DataSource(dataSourceDefaultOptions);
export default dataSourceDefaultOptions;

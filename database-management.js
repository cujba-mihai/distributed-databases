import 'reflect-metadata';
import { DataSource } from 'typeorm';

const managementConnString = createConnectionString({
  host: 'localhost',
  port: 8090,
  service: 'management',
});

export const ManagementDataSource = new DataSource({
  name: 'management',
  type: 'oracle',
  host: 'localhost',
  port: 8090,
  serviceName: 'management',
  username: 'system',
  password: 'Master2023',
  synchronize: true,
  logging: true,
  connectString: managementConnString,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/management/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/database/management/migrations',
    subscribersDir: 'subscriber',
  },
});

function createConnectionString({ host, port, service }) {
  return `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=${host})(PORT=${port}))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=${service})))`;
}

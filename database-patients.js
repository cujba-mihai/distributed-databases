import 'reflect-metadata';
import { DataSource } from 'typeorm';

const patientsConnString = createConnectionString({
  host: 'localhost',
  port: 8090,
  service: 'management',
});

export const PatientsDataSource = new DataSource({
  name: 'patients',
  type: 'oracle',
  host: 'localhost',
  port: 8091,
  username: 'system',
  password: 'Master2023',
  synchronize: true,
  logging: true,
  connectString: patientsConnString,
  serviceName: 'patients',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/database/patients/migrations',
    subscribersDir: 'subscriber',
  },
});

function createConnectionString({ host, port, service }) {
  return `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=${host})(PORT=${port}))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=${service})))`;
}

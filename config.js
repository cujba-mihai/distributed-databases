const createConfig = exports.createConfig = () => {
  const config = {
    managementDb: {
      name: 'management',
      type: 'oracle',
      host: 'localhost',
      port: 7090,
      serviceName: 'management',
      username: 'system',
      password: 'Master2023',
      synchronize: true,
      logging: true,
      service: 'management',
      entities: [__dirname + '/typeorm/entities/*.entity{.ts,.js}'],
      migrations: [__dirname + '/typeorm/migrations/management/**/*{.ts,.js}'],
      cli: {
        entitiesDir: './typeorm/entities/',
      },
    }
  };

  config.managementDb.connectionString = createConnectionString({
    host: config.managementDb.host,
    port: config.managementDb.port,
    service: config.managementDb.service
  });

  return config;
};

exports.config = createConfig();


function createConnectionString({ host, port, service }) {
  return `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=${host})(PORT=${port}))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=${service})))`;
}
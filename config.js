const Databases = {
  PATIENTS: 'patients',
  MANAGEMENT: 'management'
}

const common = {
  type: 'oracle',
  host: 'localhost',
  username: 'system',
  password: 'Master2023',
  synchronize: true,
  logging: true,
}

const patientsConfig = {
  name: Databases.PATIENTS,
  port: 7091,
  serviceName: Databases.PATIENTS,
  service: Databases.PATIENTS,
}

const managementConfig = {
  name: Databases.MANAGEMENT,
  port: 7090,
  serviceName: Databases.MANAGEMENT,
  service: Databases.MANAGEMENT,
}

managementConfig.connectionString = createConnectionString({
  host: managementConfig.host,
  port: managementConfig.port,
  service: managementConfig.service
});

patientsConfig.connectionString = createConnectionString({
  host: patientsConfig.host,
  port: patientsConfig.port,
  service: patientsConfig.service
});

const createConfig = exports.createConfig = () => {

  const config = {
    patientsDb: {
      ...common,
      ...patientsConfig
    },
    managementDb: {
      ...common,
      ...managementConfig
    }
  };



  return config;
};

exports.config = createConfig();


function createConnectionString({ host, port, service }) {
  return `(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=${host})(PORT=${port}))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=${service})))`;
}
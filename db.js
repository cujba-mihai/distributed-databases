require('reflect-metadata')
const { DataSource } = require('typeorm');
const { config } = require('./config');

const ManagementDataSource = exports.ManagementDataSource = new DataSource(config.managementDb);
const PatientsDataSource = exports.ManagementDataSource = new DataSource(config.patientsDb);

let db = {};

const initializeDatabase = async () => {
  try {
    db.managementDb = await ManagementDataSource.initialize()
    db.patientsDb = await PatientsDataSource.initialize()

    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};


const getDatabaseConnection = async () => {

  if(Object.getOwnPropertyNames(db).length > 0) return db;
  
  await initializeDatabase();

  if (!db) {
    throw new Error("Database connection hasn't been initialized.");
  }

  return db;
};



exports.getDatabaseConnection = getDatabaseConnection;

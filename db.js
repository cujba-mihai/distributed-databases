require('reflect-metadata')
const { DataSource } = require('typeorm');
const { config } = require('./config');

const ManagementDataSource = exports.ManagementDataSource = new DataSource(config.managementDb);

let db = {};

const initializeDatabase = async () => {
  try {
    db = await ManagementDataSource.initialize()
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const getDatabaseConnection = () => {
  if (!db) {
    throw new Error("Database connection hasn't been initialized.");
  }
  return db;
};

// Initialize database
(async () => {
  await initializeDatabase();
})();

exports.getDatabaseConnection = getDatabaseConnection;

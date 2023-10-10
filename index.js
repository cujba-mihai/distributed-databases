const express = require('express')
const app = express();
const cors = require('cors');
const { getDatabaseConnection } = require('./db');
const { faker } = require('@faker-js/faker');
const { departmentSeed } = require('./typeorm/seeds/department')
const { seedStaff } = require('./typeorm/seeds/staff')
const { seedPatients } = require('./typeorm/seeds/patient')
const { seedMedicalRecord }  = require('./typeorm/seeds/medical-record')


const initializeDatabaseAndSeeds = async () => {
    try {
        const { managementDb, patientsDb } = await getDatabaseConnection();
        console.assert(typeof managementDb === 'object', 'Could not connect to management db')
        console.assert(typeof patientsDb === 'object', 'Could not connect to patients db')

        await departmentSeed(managementDb);
        await seedStaff(managementDb);
        await seedPatients({ managementDb, patientsDb });
        await seedMedicalRecord(patientsDb)
        
        console.log('Seeding successful');
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

(async () => {
    await initializeDatabaseAndSeeds();
})();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', async (req, res) => {



    res.send('Hello world')
})

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.use(express.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.listen(3030, () => {
    console.log('Server listening on port 3030');
})
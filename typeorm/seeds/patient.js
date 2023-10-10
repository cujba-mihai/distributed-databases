const { faker } = require('@faker-js/faker');

exports.seedPatients = async ({ managementDb, patientsDb }) => {
    // Check how many patients already exist
    const patientCountResult = await patientsDb.manager.query('SELECT COUNT(*) as count FROM c##mihai.Patient');
    const patientCount = patientCountResult[0].COUNT;

    // Check how many staff are available to assign to the patients
    const staffCountResult = await managementDb.manager.query('SELECT COUNT(*) as count FROM c##mihai.Staff');
    const staffCount = staffCountResult[0].COUNT;

    if (patientCount > 50) {
        console.log("Records already exist in Patient table. Skipping insertion.");
        return;
    }

    if (staffCount === 0) {
        console.log("No staff available. Cannot seed patients.");
        return;
    }

    // Populate Patient
    for (let i = patientCount; i < patientCount + 50; i++) {
        let name = faker.person.fullName().replace(/'/g, "''");
        let age = faker.number.int({ min: 0, max: 100 });
        const staff_id = Math.floor(Math.random() * staffCount);

        await patientsDb.manager.query(`INSERT INTO c##mihai.Patient (id, name, age, staff_id) VALUES (${i}, '${name}', ${age}, ${staff_id})`);
    }
};

const Patient = require('../../models/remote/patient.model');
const { faker } = require('@faker-js/faker');

exports.seedPatients = async (num, staffIds, { localDatabase, remoteDatabase }) => {
    const patients = [];

    const totalCount = await remoteDatabase.models.Patient.count();

    if (totalCount > 0) return patients;

    const ids = staffIds?.length > 0 ? staffIds : Array.from({ length: 5 }).map(() => faker.number.int({ min: 1, max: 5 }))

    for (let i = 0; i < num; i++) {
        const patient = {
            name: faker.person.fullName(),
            age: faker.number.int({ min: 1, max: 100 }),
            staffId: faker.helpers.arrayElement(ids),
        };

        patients.push(patient);
    }

    try {
        await remoteDatabase.models.Patient.bulkCreate(patients);
        console.log('Successfully seeded patients');
    } catch (error) {
        console.error('Error seeding patients: ', error);
    }
};
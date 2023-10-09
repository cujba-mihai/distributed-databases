const { faker } = require('@faker-js/faker');

exports.seedMedicalRecords = async (num, patientIds, { localDatabase, remoteDatabase }) => {
    const medicalRecords = [];

    const totalCount = await remoteDatabase.models.MedicalRecord.count();
    console.log({ totalCount });

    if (totalCount > 0) return medicalRecords;

    for (let i = 0; i < num; i++) {
        const medicalRecord = {
            patientId: faker.helpers.arrayElement(patientIds),
            diagnosis: faker.lorem.words(3),
            treatment: faker.lorem.sentence(),
        };

        medicalRecords.push(medicalRecord);
    }

    try {
        await remoteDatabase.models.MedicalRecord.bulkCreate(medicalRecords);
        console.log('Successfully seeded medical records');
    } catch (error) {
        console.error('Error seeding medical records: ', error);
    }
};
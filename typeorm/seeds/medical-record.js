const { faker } = require('@faker-js/faker');

exports.seedMedicalRecord = async (patientsDb) => {

  // Check how many medical records already exist
  const medicalRecordsCountResult = await patientsDb.manager.query('SELECT COUNT(*) as count FROM c##mihai.MedicalRecord');
  const medicalRecordsCount = medicalRecordsCountResult[0].COUNT;

  if (medicalRecordsCount > 0) {
    console.log("Records already exist in Medical Records table. Skipping insertion.");  
    return;
  }

  // Number of records you want to seed
  const numberOfRecords = 100;

  // Loop to create multiple records
  for (let i = 0; i < numberOfRecords; i++) {
    // Generating fake data for the MedicalRecord table
    const id = i + 1; // assuming that id starts from 1 and auto-increments
    const patient_id = faker.number.int({ min: 1, max: 50 }); // replace min and max with actual range of patient IDs
    const diagnosis = faker.lorem.sentence();
    const treatment = faker.lorem.sentence();

    // Execute the query with the database client
    try {
      await patientsDb.manager.query(
        `
      INSERT INTO c##mihai.MedicalRecord (id, patient_id, diagnosis, treatment)
      VALUES (${id}, '${patient_id}', '${diagnosis}', '${treatment}')
    `
      );
    } catch (error) {
      console.error('Error seeding MedicalRecord:', error);
    }
  }
};

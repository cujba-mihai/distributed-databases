const { seedDepartments } = require('./department/index');
const { seedStaffs } = require('./staff/index');
const { seedPatients } = require('./patient/index');
const { seedMedicalRecords } = require('./medical-record/index');

exports.runSeeders = async (dbs) => {
    const { localDatabase, remoteDatabase } = dbs;

    // Seed 10 staff
    await seedDepartments(10, dbs);
    await seedStaffs(10, dbs);

    // Fetch Staff IDs
    const staffs = await localDatabase.models.Staff.findAll({ attributes: ['id'] });
    const staffIds = staffs.map(s => s.id);

    // Seed 50 patients
    await seedPatients(50, staffIds, dbs);

    // Fetch Patient IDs
    const patients = await remoteDatabase.models.Patient.findAll({ attributes: ['id'] });
    const patientIds = patients.map(p => p.id);

    // Seed 100 medical records
    await seedMedicalRecords(100, patientIds, dbs);
};

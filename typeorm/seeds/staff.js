const { faker } = require('@faker-js/faker');

exports.seedStaff = async (managementDb) => {
    // Check how many staff already exist
    const staffCountResult = await managementDb.manager.query('SELECT COUNT(*) as count FROM c##mihai.Staff');
    const staffCount = staffCountResult[0].COUNT;

    // Check how many departments are available to assign to the staff
    const departmentCountResult = await managementDb.manager.query('SELECT COUNT(*) as count FROM c##mihai.Department');
    const departmentCount = departmentCountResult[0].COUNT;

    if (staffCount > 50) {
        console.log("Records already exist in Staff table. Skipping insertion.");
        return;
    }

    if (departmentCount === 0) {
        console.log("No departments available. Cannot seed staff.");
        return;
    }

    // Populate Staff
    for (let i = staffCount; i < staffCount + 50; i++) {
        let name = faker.person.fullName().replace(/'/g, "''");
        let role = faker.person.jobTitle().replace(/'/g, "''");
        const department_id = Math.floor(Math.random() * departmentCount);

        await managementDb.manager.query(`INSERT INTO staff (id, name, role, department_id) VALUES (${i}, '${name}', '${role}', ${department_id})`);
    }
};

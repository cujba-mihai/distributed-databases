const { faker } = require('@faker-js/faker');

exports.departmentSeed = async (managementDb) => {
    // Check if records already exist in Department table
    const result = await managementDb.manager.query('SELECT COUNT(*) as count FROM c##mihai.Department');
    const count = result[0].COUNT;

    if(count > 10) {
        console.log("Records already exist in Department table. Skipping insertion.");
        return;
    }

    // Populate Department
    for (let i = count; i < count + 10; i++) {
      const department = {
          id: i,
          name: faker.company.name(),
          budget: faker.finance.amount()
      };

      await managementDb.manager.query(`INSERT INTO c##mihai.Department (id, name, budget) VALUES (${department.id}, '${department.name}', ${department.budget})`);
    }
}

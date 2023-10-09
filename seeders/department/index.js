const { faker } = require('@faker-js/faker');

exports.seedDepartments = async (num, { localDatabase, remoteDatabase }) => {
    const departments = [];

    const totalCount = await localDatabase.models.Department.count();
    console.log({ totalCount });

    if (totalCount > 0) return departments;

    for (let i = 0; i < num; i++) {
        const department = {
            name: faker.company.name(),
            budget: faker.number.int({ max: 10_000, min: 1_000 })
        };

        departments.push(department);
    }

    try {
        await localDatabase.models.Department.bulkCreate(departments);
        console.log('Successfully seeded departments');
    } catch (error) {
        console.error('Error seeding departments: ', error);
    }
};

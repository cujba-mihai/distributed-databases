const Staff = require('../../models/local/staff.model')
const { faker } = require('@faker-js/faker');

exports.seedStaffs = async (num, { localDatabase, remoteDatabase }) => {
    const staffs = [];
    const totalCount = await localDatabase.models.Staff.count();

    if (totalCount > 0) return staffs;

    for (let i = 0; i < num; i++) {
        const staff = {
            name: faker.person.fullName(),
            role: faker.person.jobTitle(),
        };

        staffs.push(staff);
    }

    try {
        await localDatabase.models.Staff.bulkCreate(staffs);
        console.log('Successfully seeded staffs');
    } catch (error) {
        console.error('Error seeding staffs: ', error);
    }
};
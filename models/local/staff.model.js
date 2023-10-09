const { DataTypes, Model } = require('sequelize');
const sequelizeLocal = require('../../db-connection')?.localDatabase;
if (!sequelizeLocal) {
    throw new Error("Sequelize instance for local database is undefined");
}
class Staff extends Model { }

module.exports = {
    init: Staff.init.bind(Staff),
    attributes: {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.STRING
        },
    },
    options: {
        sequelize: sequelizeLocal,
        modelName: 'Staff'
    }
}
const { DataTypes, Model } = require('sequelize');
const sequelizeLocal = require('../../db-connection')?.localDatabase;
if (!sequelizeLocal) {
    throw new Error("Sequelize instance for local database is undefined");
}
class Department extends Model { }

module.exports = {
    init: Department.init.bind(Department),
    attributes: {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        budget: {
            type: DataTypes.INTEGER
        }
    },
    options: {
        sequelize: sequelizeLocal,
        modelName: 'Department'
    }
}

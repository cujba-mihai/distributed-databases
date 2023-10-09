const { DataTypes, Model } = require('sequelize');
const sequelizeRemote = require('../../db-connection')?.remoteDatabase;

class Patient extends Model { }

module.exports = {
    init: Patient.init.bind(Patient),
    attributes: {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER
        },
        staffId: {
            type: DataTypes.INTEGER
        },
    },
    options: {
        sequelize: sequelizeRemote,
        modelName: 'Patient'
    }
}

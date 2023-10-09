const { DataTypes, Model } = require('sequelize');
const sequelizeRemote = require('../../db-connection')?.remoteDatabase;

class MedicalRecord extends Model { }

module.exports = {
    init: MedicalRecord.init.bind(MedicalRecord),
    attributes: {
        patientId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        diagnosis: {
            type: DataTypes.STRING
        },
        treatment: {
            type: DataTypes.STRING
        },
    },
    options: {
        sequelize: sequelizeRemote,
        modelName: 'MedicalRecord'
    }
}


const fs = require('fs');
const path = require('path');

exports.assignModels = (db, location) => {
    const modelsLocationDir = path.join(__dirname, 'models', location);
    const models = fs.readdirSync(modelsLocationDir);

    models.forEach(modelFile => {
        const model = require(path.join(modelsLocationDir, modelFile));
        const modelName = path.basename(modelFile, '.model.js').split('-').join('_');

        // Debug: Log the model before initialization
        model.init(model.attributes, {
            sequelize: db,
            modelName: modelName,
            ...model.options
        });
    });
};
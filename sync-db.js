const { assignModels } = require('./sync-models')

exports.syncDatabase = async (database, location) => {
    try {
        await database.authenticate();
        console.log(`${location} Database Connected.`);

        // Debug: Log the database instance before and after assigning models
        console.log('Database before assignModels:', database.config.database);
        assignModels(database, location);
        console.log('Database after assignModels:', database.config.database);

        await database.sync({ force: true });
        console.log(`${location} tables created`);

    } catch (err) {
        console.error(`Unable to connect to the ${location} database:`, err);
    }
};
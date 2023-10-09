const { Sequelize } = require('sequelize');
const { LocalDbConnection, REMOTE_DB_URL } = require('./env');
const { syncDatabase } = require('./sync-db');


const localDatabase = new Sequelize(
    LocalDbConnection.dbname,
    LocalDbConnection.user,
    LocalDbConnection.password,
    {
        ...LocalDbConnection,
        logging: console.log
    }
);

const remoteDatabase = new Sequelize(
    REMOTE_DB_URL,
    { logging: console.log }
);


(async () => {
    try {
        console.log({ localDatabase: localDatabase.config, remoteDatabase: remoteDatabase.config })
        await Promise.all([
            syncDatabase(localDatabase, 'local'),
            syncDatabase(remoteDatabase, 'remote')
        ]);

        const { runSeeders } = require('./seeders/index');
        await runSeeders({ localDatabase, remoteDatabase });
    } catch (error) {
        console.error('Error initializing databases:', error);
    }
})();



const DbConnection = async () => {
    const localResult = await localDatabase.query('SELECT * FROM citus_version();');
    const remoteResult = await remoteDatabase.query('SELECT NOW()');

    return { remoteResult, localResult };
};

module.exports = {
    instance: {
        remote: remoteDatabase,
        local: localDatabase
    },
    remoteDatabase,
    localDatabase,
    DbConnection
}

exports.LocalDbConnection = {
    host: 'localhost',
    port: 8000,
    dialect: 'postgres',
    dbname: 'postgres',
    user: 'postgres',
    password: 'mypass',
    sslmode: 'require'
}

// exports.REMOTE_DB_URL = "postgresql://mike:knZG7qZNwdmyN1cYz9_ONw@fruit-pika-10880.8nj.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full"
exports.REMOTE_DB_URL = "postgres://sportcripples:Z5IMH1xefdJD@ep-mute-block-13604579.eu-central-1.aws.neon.tech/neondb?sslmode=require"
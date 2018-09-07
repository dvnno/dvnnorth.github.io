require('dotenv').config(); // this is important!
module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE_DEV,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    },
    "test": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE_TEST,
        "host": process.env.DB_HOST,
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": process.env.JAWSDB_URL
    }
};
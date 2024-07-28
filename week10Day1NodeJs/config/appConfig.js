const dotenv = require('dotenv')
dotenv.config()

const appConfig = {
    PORT: process.env.PORT,
    MONGO_DB_URI: process.env.MONGO_DB_URI,
    SALT_ROUNDS: process.env.SALT_ROUNDS,
    JWT_SECRET: process.env.JWT_SECRET
}

module.exports = appConfig
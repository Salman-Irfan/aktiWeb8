const mongoose  = require("mongoose")
const appConfig = require("../appConfig")

const connectToMongoDb = async () => {
    try {
        const MONGO_URL = appConfig.MONGO_DB_URI

        const mongoResponse = await mongoose.connect(MONGO_URL)
        if (mongoResponse) {
            console.log(`mongo db connected with this url ${MONGO_URL} `)
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectToMongoDb


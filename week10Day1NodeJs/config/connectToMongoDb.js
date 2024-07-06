const mongoose  = require("mongoose")

const connectToMongoDb = async () => {
    try {
        const MONGO_URL = `mongodb://127.0.0.1:27017/booksProject`

        const mongoResponse = await mongoose.connect(MONGO_URL)
        if (mongoResponse) {
            console.log(`mongo db connected with this url ${MONGO_URL} `)
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectToMongoDb


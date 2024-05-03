import 'dotenv/config'
import mongoose from "mongoose"

const DB_URL = process.env.DB_URL
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL, options)
    } catch (e) {
        console.error(e)
    }
}

export default connectDB

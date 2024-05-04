import 'dotenv/config'
import express from "express"
import cors from "cors"

import book from "./routes/book.js";
import author from "./routes/author.js";
import genre from "./routes/genre.js";

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors()) // добавляем использование CORS
app.use("/api", book)
app.use("/api", author)
app.use("/api", genre)

async function start() {
    try {
        app.listen(PORT, () => console.log(`The project has been launched on port ${ PORT } =======================================================================================================================================================================================================================================================================================`))
    } catch (e) {
        console.error(e)
    }
}

start()

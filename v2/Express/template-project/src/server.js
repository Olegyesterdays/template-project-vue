import 'dotenv/config'
import express from "express"
import cors from "cors" // добавляем импорт для CORS

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cors()) // добавляем использование CORS

async function start() {
    try {
        app.listen(PORT, () => console.log(`The project has been launched on port ${ PORT } =======================================================================================================================================================================================================================================================================================`))
    } catch (e) {
        console.error(e)
    }
}

start()

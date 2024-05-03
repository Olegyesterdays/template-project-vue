import 'dotenv/config'
import express from "express"

import connectDB from "./connect.js"
import voting from "./routes/voting.js"
import user from "./routes/user.js"
import answer from "./routes/answer.js"
import statistics from "./routes/statistics.js"

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use("/crud", voting)
app.use("/crud", user)
app.use("/crud", answer)
app.use("/statistics", statistics)

async function start() {
    try {
        connectDB()
        app.listen(PORT, () => console.log(`The project has been launched on port ${ PORT }`))
    } catch (e) {
        console.error(e)
    }
}

start()

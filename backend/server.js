import express from "express"
import "dotenv/config"
import cors from "cors"
import db from "./db.js"
import router from "./routes/alertRoutes.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/alerts", router)


app.listen(process.env.PORT, ()=> console.log(`listening on port ${process.env.PORT}`))
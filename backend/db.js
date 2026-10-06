import { MongoClient } from 'mongodb'
import "dotenv/config"

const uri = process.env.MONGO_URI
const client = new MongoClient(uri)

await client.connect()

const db = client.db("tzofia")

console.log("connected to mongodb!")

export default db
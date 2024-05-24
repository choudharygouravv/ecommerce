const { MongoClient } = require("mongodb")
const url = "mongodb://localhost:27017"
const databse = "cricket"
const client = new MongoClient(url)

async function connectdb() {
    const conn = await client.connect()
    const db = conn.db(databse)
    return db.collection("players")
}
connectdb()
module.exports=connectdb;
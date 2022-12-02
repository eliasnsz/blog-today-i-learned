const { MongoClient, ObjectId } = require("mongodb");


const uri = "mongodb+srv://elias:elias@teste.laldopk.mongodb.net/?retryWrites=true&w=majority";

let cachedDb;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb
  }
  const client = await MongoClient.connect(uri)
  const db = client.db("posts")
  cachedDb = db
  return db
}

export default async function handler(req, res) {

  const db = await connectToDatabase()
  const postlist = await db.collection("posts-list")


  if (req.method === "GET") {

    const posts = await postlist.find().toArray()
    return res.status(200).send(posts)
  
  }

}

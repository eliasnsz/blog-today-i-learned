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
    await res.status(200).send(posts)
  
  }


  if (req.method === "POST") {

    const { title, body, author} = req.body

    const newPost = {
      title,
      body,
      author,
      date: new Date()
    }

    postlist.insertOne(newPost)
    res.status(200).send("Sucess")
  
  }


  if (req.method === "DELETE") {
  
    const { uuid } = req.body
    const deleted = await postlist.findOneAndDelete({ _id: ObjectId(uuid) })
    res.status(200).send("Deleted")

  }
  
}

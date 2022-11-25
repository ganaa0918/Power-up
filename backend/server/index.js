// server/index.js

const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://tuguldur1202:gunj8878@cluster0.whifwho.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
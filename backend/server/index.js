// server/index.js

const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

const { MongoClient } = require("mongodb");

var cors = require('cors');
var v12dqw = require('body-parser');

app.use(cors())
app.use(v12dqw.json());
// Replace the uri string with your connection string.



const uri =
"mongodb+srv://tuguldur1202:gunj8878@cluster0.whifwho.mongodb.net/?retryWrites=true&w=majority";

app.route('/register').post(function (req, res) {
  
  async function run() {
        const client = new MongoClient(uri);
            try {
              const database = client.db('Fitness');
              const Cus = database.collection('Customer');
              console.log(req.body);
              const result = await Cus.insertOne(req.body);
              res.send('{"success":true}');
              console.log(`A document was inserted with the _id: ${result.insertedId}`);
              
            } finally {
              
              await client.close();
            }
          }
          run().catch(console.dir);
          
        });
     
 app.route('/Login').post(function (req, res) {
 
  async function run() {
    const client = new MongoClient(uri);
        try {
          const database = client.db('Fitness');
          const Cus = database.collection('Customer');
          
          const query = { username: req.body.Uname , password: parseInt(req.body.pass)};
          console.log(query);
          
          const Ctype = await Cus.findOne(query);
         
          console.log(Ctype.type);
          
          res.send([Ctype.type]);
          console.log(req.body);
        } finally {
          
          await client.close();
        }
      }
      run().catch(console.dir);
      
    });

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
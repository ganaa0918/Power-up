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

app.route('/user/:id').get(function (req, res)  {
  console.log(req.params.id);
  res.send("hi");
  
});


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

app.route('/zahialga/zahialga_hiih').post(function (req, res) {

 console.log(req.body);
});
app.route('/zahialga/zahialga_hiih').get(function (req, res) {
    async function run() {
    const client = new MongoClient(uri);
    try {
      const database = client.db('Fitness');
      const Cus = database.collection('huwaari');
     
      const Ctype = await Cus.find();
      console.log("hi1");
        console.log(Ctype);
        console.log("hi");
        
        
    } finally {

      await client.close();
    }
  }
  run().catch(console.dir);
 });
 
 app.route('/profile').get(function (req, res) {
  async function run() {
  const client = new MongoClient(uri);
  try {
    const database = client.db('Fitness');
    const Cus = database.collection('Customer');
    console.log(req.params)
    const Ctype = await Cus.findOne();
    
      console.log(Ctype);
     
      
      
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
      if (req.body.Uname != null && req.body.pass != null) {
        const query = { username: req.body.Uname, password: req.body.pass };
        console.log(query);

        const Ctype = await Cus.findOne(query);
      
        console.log(Ctype);
        
        

        res.send([Ctype.type , Ctype._id]);
        console.log(req.body);
      }
      else {
        res.status(404).send('{amjiltgui}');
      }
    } finally {

      await client.close();
    }
  }
  run().catch(console.dir);

});
app.route('/profile').post(function (req, res) {

  async function run() {
    const client = new MongoClient(uri);
    try {
      const database = client.db('Fitness');
      const Cus = database.collection('Customer');
      
        
        console.log(id1);

        const Ctype = await Cus.findOne(query);
        console.log(Ctype._id);
        console.log("h1" + Ctype.type);

        res.send([Ctype.type]);
        console.log(req.body);
      
      
    } finally {

      await client.close();
    }
  }
  run().catch(console.dir);

});




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
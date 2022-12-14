// server/index.js

const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

const { MongoClient } = require("mongodb");

var cors = require('cors');
var v12dqw = require('body-parser');
const uri =
  "mongodb+srv://tuguldur1202:gunj8878@cluster0.whifwho.mongodb.net/?retryWrites=true&w=majority";
app.use(cors())
app.use(v12dqw.json());
// Replace the uri string with your connection string.
app.route('/Login').post(function (req, res) {

  async function run() {
    const client = new MongoClient(uri);
    try {
      const database = client.db('Fitness');
      const Cus = database.collection('Customer');
      if (req.body.Uname != null && req.body.pass != null) {
        const query = { username: req.body.Uname, password: req.body.pass };
        console.log(query);

        const Customer = await Cus.findOne(query);
      
        console.log(Customer.type);
        
        

        res.send([Customer.type , Customer._id ]);
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


app.route('/User/zahialga/zahialga_hiih').post(function (req, res) {
    async function run() {
    const client = new MongoClient(uri);
    try {
      console.log(req.body);
      const database = client.db('Fitness');
      const Cus = database.collection('Order');
      const result = await Cus.insertOne(req.body);
      res.send('{"success":true}');
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
        
        

    } finally {

      await client.close();
    }
  }
  run().catch(console.dir);
 });
app.route('/User/zahialga/zahialga_hiih').get(function (req, res) {
  async function run() {
    const client = new MongoClient(uri);
    try {
      console.log("hi");
      const database = client.db('Fitness');
      const Cus = database.collection('huwaari');
      t = {t: "??????"};
      console.log(t);
      const cursor = Cus.find(t);
     
      if ((await cursor.count()) === 0) {
        console.log("No documents found!");
      }
      res.send(await cursor.toArray());
    } finally {

      await client.close();
    }
  }
  run().catch(console.dir);
});





  app.route('/admin/user_info').get(function (req, res)  {
    const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("Fitness");
    const movies = database.collection("Customer");
    // query for movies that have a runtime less than 15 minutes
    const query = { type: "??????????????????" };
    
    const cursor = movies.find(query);
    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }
    res.send(await cursor.toArray());
    
    // replace console.dir with your callback to access individual elements
    
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
    
  });
  app.route('/admin/teacher_info').get(function (req, res)  {
    const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("Fitness");
    const movies = database.collection("Customer");
    // query for movies that have a runtime less than 15 minutes
    const query = { type: "????????" };
    
    const cursor = movies.find(query);
    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }
    res.send(await cursor.toArray());
    
    // replace console.dir with your callback to access individual elements
    
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
    
  });
  app.route('/admin/zahialga_info').get(function (req, res)  {
    const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("Fitness");
    const movies = database.collection("Order");
    // query for movies that have a runtime less than 15 minutes
    const query = { t: "????????????????" };
    
    const cursor = movies.find(query);
    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }
    res.send(await cursor.toArray());
    
    // replace console.dir with your callback to access individual elements
    
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
    
  });
  app.route('/admin/user_info').delete(function (req, res)  {
    const client = new MongoClient(uri);
async function run() {
  try {
    console.log(req.body);
    const database = client.db("Fitness");
    const movies = database.collection("Customer");
    // query for movies that have a runtime less than 15 minutes
    
    const result = await movies.deleteOne(req.body);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
    // print a message if no documents were found
    
    
    // replace console.dir with your callback to access individual elements
    
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


app.route('/profile').post(function (req, res) {

  async function run() {
    const client = new MongoClient(uri);
    try {
      const database = client.db('Fitness');
      const Cus = database.collection('Customer');
      console.log(req.body);
      const filter = { _id:  req.body.user};
      
      const options = { $set: { username: req.body.username , 
                        Fname: req.body.Fname , 
                        Phone : req.body.Phone , 
                        password: req.body.password , 
                        email: req.body.email} };
       

      const Ctype = await Cus.findOneAndUpdate(filter , options);
      console.log(Ctype);
      res.send('{"success":true');
      
      
    } finally {

      await client.close();
    }
  }
  run().catch(console.dir);

});
app.route('/teacher/teacherhuvaari/huvaarinemeh').post(function (req, res) {

  async function run() {
    const client = new MongoClient(uri);
    try {
      
      console.log(req.body);
      const database = client.db('Fitness');
      const Cus = database.collection('Customer');
      const result = await Cus.insertOne(req.body);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
        res.send('{"success":true}');
      
      
    } finally {

      await client.close();
    }
  }
  run().catch(console.dir);

});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
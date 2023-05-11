// const express = require('express');
// const app = express();
// const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb+srv://Api:root@api1.vb2hjwo.mongodb.net/";
// const dbName = "Api";

// app.get('/datas', (req, res) => {
//     MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//       if (err) {
//         console.log('Error connecting to MongoDB:', err);
//         return res.status(500).send('Error connecting to MongoDB');
//       }
  
//       const db = client.db(dbName);
//       const collection = db.collection('datas');
  
//       collection.find({}).toArray((err, datas) => {
//         if (err) {
//           console.log('Error fetching datas:', err);
//           return res.status(500).send('Error fetching datas');
//         }
  
//         res.json(datas);
//       });
//     });
//   });
  
//   // Start the server
//   app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
//   });

// 1. Set up database connection
const database = require('mongodb');

const connection = database.createConnection
  // Database connection configuration
  const url = 'mongodb+srv://Api:root@api1.vb2hjwo.mongodb.net/'; // URL of the MongoDB server
const dbName = 'Api'; // Name of the database to connect to

MongoClient.connect(url, function(err, client) {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      return;
    }
  
    const db = client.db(dbName);
  });

// 2. Establish the database connection
connection.connect();

// 3. Create an API endpoint using Express.js
const express = require('express');
const app = express();

// API endpoint to retrieve the Districts
app.get('/districts', (req, res) => {
  // Retrieve the District data from the database
  const districts = // Logic to fetch Districts from the database

  // Send the Districts as a response
  res.json(districts);
});

// API endpoint to retrieve the CollegeNames based on the selected District
app.get('/colleges/:district', (req, res) => {
  const selectedDistrict = req.params.district;

  // Retrieve the CollegeNames data based on the selected District from the database
  const colleges = // Logic to fetch CollegeNames based on the selected District from the database

  // Send the CollegeNames as a response
  res.json(colleges);
});

// API endpoint to retrieve the CollegeCodeIds based on the selected CollegeName
app.get('/college-codes/:collegeName', (req, res) => {
  const selectedCollegeName = req.params.collegeName;

  // Retrieve the CollegeCodeIds data based on the selected CollegeName from the database
  const collegeCodes = // Logic to fetch CollegeCodeIds based on the selected CollegeName from the database

  // Send the CollegeCodeIds as a response
  res.json(collegeCodes);
});

// 4. Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

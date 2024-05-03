const express = require('express');
const app = express();
const port = process.env.PUBLIC_PORT || 3000;
const mongoose = require("mongoose");
const { connection } = require('./config/db.js'); // Corrected path
const MoodScapeData = require('./config/database.json');
const { MoodScapeModel } = require('./Model/MoodScape.js'); // Corrected path
const CRUD_routes = require('./Routes/routes.js');
const cors= require('cors')
app.use(cors());
app.use(express.json());
app.use("/routes", CRUD_routes);

const dotenv = require('dotenv');
dotenv.config();

//console.log(MoodScapeDat)
app.get("/allData",async(req,res)=>{
  let result=await MoodScapeModel.insertMany(MoodScapeData)
  console.log(result)
})
app.get("/", async (req, res) => {
  let message = "Hello, world!"; 
  let statusCode = 200; 

  res.status(statusCode).send(`<h1>${message}</h1><p>Status Code: ${statusCode}</p>`);
});



app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/postdata', (req, res) => {
  MoodScapeModel.insertMany(MoodScapeData)
    .then((result) => {
      console.log('Inserted', result.length, "documents into the collection");
      res.status(200).send('Data inserted successfully');
    })
    .catch((error) => {
      console.error('Error inserting documents', error);
      res.status(500).send('Failed to insert data');
    });
});
app.use("/routes",CRUD_routes);


app.listen(port, async() => {
  try{
    await connection;
    console.log('connected to mongoDB')
    if (mongoose.connection.readyState === 1) {
      message = 'Connected to MongoDB';
      statusCode = 200;
    } else {
      message = 'Not connected to MongoDB';
      statusCode = 500;
    }
  } catch (error) {
    console.log("Error connecting to DB");
    console.log(error);
    message = 'Error connecting to MongoDB';
    statusCode = 500;
  }
  console.log(`Server is listening on port ${port}`);
});

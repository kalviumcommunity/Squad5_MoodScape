const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const { connection } = require('./Database/Data.js'); // Corrected path
const { MoodScapeModel } = require('./Model/MoodScape'); // Corrected path
const mongoose = require("mongoose");
const MoodScapeData = require('./Database/database');
const port = process.env.PUBLIC_PORT || 3000;


app.get("/", async (req, res) => {
  let message, statusCode;
  try {
    await connection;
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


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

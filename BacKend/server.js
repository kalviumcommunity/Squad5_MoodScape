const express = require('express');
const app = express();
const dotenv=require('dotenv');
dotenv.config()
const port = process.env.PUBLIC_PORT || 3000; 
const {connection}=require(Database/Data.js);
const {MoodScapeSchema }= require(/Database/database);
const {MoodScapeModel}= require(/Model/MoodScape);
const mongoose = require("mongoose");
const MoodScapeData = require('./Database/database');


app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.post('/postdata',(req,res)=>{
  MoodScapeModel.insertMany(MoodScapeData)
    .then((result)=>{
      console.log('Inserted', result.length,"documents into the collection");
      res.status(200).send('Data inserted successfully');
    })
    .catch((error)=>{
      console.error('Error inserting documents',error);
      res.status(500).send('Failed to insert data');
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
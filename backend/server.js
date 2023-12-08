// dot env import
require('dotenv').config();
// mongoose imports
const mongoose = require('mongoose');
// imports from another file
const store = require('./models/mongooseModel');
const ItemRoutes = require('./routes/items');

// express app
const express = require('express');
const app = express();
const cors = require('cors')


// dotenv
const mongoURI = process.env.MONGODB_URI;
const PORT = process.env.PORT


// Middleware
app.use(cors())

app.use(express.json())

app.use('/api/items', ItemRoutes)

app.use((req, res, next) => {
  console.log('Middleware:', req.path, req.method);
  next();
});

// Connecting to MongoDB using Mongoose
async function connectToDb() {
  try {
    await mongoose.connect(mongoURI, {

    });
    console.log('Connected to the database');
    // Listen to port
    app.listen(PORT, () => {
      console.log('Listening for requests on port', PORT);
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

// Call the connectToDb function to establish the connection
connectToDb();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(err => {
    console.error("Database connection error:", err);
  });

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up middleware
app.use(bodyParser.json());

// Set up routes
const UserRoute = require('./route/userRoute');
app.use('/', UserRoute); // This allows routes in userRoute to be accessed

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

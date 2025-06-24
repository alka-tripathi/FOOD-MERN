const express = require('express');
require('dotenv').config;

const app = express();
const port = 5000;
// const port=process.env.PORT;

const mongodb = require('./db.js');
mongodb();

//CORS (Cross-Origin Resource Sharing) middleware to allow requests from your React frontend running on localhost:3000.

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept'
  );
  next();
});

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', require('./Routes/CreateUser.js'));
app.use('/api', require('./Routes/DisplayData.js'));
app.use('/api', require('./Routes/OrderData.js'));
// app.use('/api',require(''))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

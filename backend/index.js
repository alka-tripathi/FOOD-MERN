const express = require('express');


const app = express();
const port = 5000;

const mongodb = require('./db.js');
mongodb();


app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', require('./Routes/CreateUser.js'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

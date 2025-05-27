const express = require('express');
const router = express.Router();

//import schema
const User = require('../models/User.js');

//end point
router.post('/createuser', async (req, res) => {
  try {
    //model function  it creates the collection

    let { name, email, password, location } = req.body;
    await User.create({
      name,
      password,
      email,
      location,
    });
    res.json({ success: true });
  } catch (err) {
    console.log('❌ Error:', err.message);
    res.json({ success: false });
  }
});

module.exports = router;

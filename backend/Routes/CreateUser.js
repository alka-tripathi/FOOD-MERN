const express = require('express');
const router = express.Router();
require('dotenv').config();

//import schema
const User = require('../models/User.js');

const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

// const secert = 'mynameisalka';
const secert=process.env.SECERT

const jwt = require('jsonwebtoken');

//Ye ek API ka example hai jo database ke saath kaam karti hai.

//end point

// router.post('URL', middleware[], async (req, res) => {
// //   // yahan tumhara main logic hoga
// // });
router.post(
  '/createuser',

  [
    body('email').isEmail(),
    body('password', 'incorrect password').isLength({ min: 5 }),
    body('name').isLength({ min: 5 }),
  ],

  async (req, res) => {
    //ye database mai  save nai hoga
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //model function  it creates the collection
      let { name, email, password, location } = req.body;
      const salt = await bcrypt.genSalt(10);
      let secPassword = await bcrypt.hash(req.body.password, salt); //fronetend se jo password aaya hai usko hash karna hai
      await User.create({
        name,
        password: secPassword,
        email,
        location,
      });
      res.json({ success: true });
    } catch (err) {
      console.log(' Error:', err.message);
      res.status(500).json({ success: false, error: 'Internal server Error' });
    }
  }
);

//find wether data enter is coreect or not drom signup

router.post(
  '/loginuser',
  [
    body('email').isEmail(),
    body('password', 'incorrect password').isLength({ min: 5 }),
  ],

  async (req, res) => {
    let email = req.body.email;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //model function  it creates the collection
      let { email, password } = req.body;
      let userdata = await User.findOne({ email }); //return data from this email
      if (!userdata) {
        return res.status(400).json({
          success: false,
          error: 'Try login  with correct credetials',
        });
      }
      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userdata.password
      );
      if (!pwdCompare) {
        //here password is the key which is differnt from other
        return res
          .status(400)
          .json({ error: 'Try login  with correct password credetials' });
      }
      //if password is correct then we will create a token
      const data = {
        user: {
          id: userdata.id,
        },
      };
      const authtoken = jwt.sign(data, secert);
      return res.json({ success: true, authtoken });
    } catch (err) {
      console.log(' Error:', err.message);
      res.json({ success: false });
    }
  }
);
module.exports = router;

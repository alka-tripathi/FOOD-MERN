const express = require('express');
const router = express.Router();

const Order = require('../models/Orders');
router.post('/orderData', async (req, res) => {
  let data = req.body.order_data;

  await data.splice(0, 0, { Order_data: req.body.email });

  let eid = await Order.findOne({ email: req.body.email });
  console.log(eid);
  if (eid === null) {
    try {
      await Order.create({
        email: req.body.email,
        order_data: { data },
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.send('Server Error', error.message);
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      res.send('Server Error:', error.message);
    }
  }
});

module.exports = router;

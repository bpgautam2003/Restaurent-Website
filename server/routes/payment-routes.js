const express = require('express');
const router = express.Router();

const paymentController = require('../controllers/payment-controller');

router.post("/create-checkout", paymentController.createCheckout)


module.exports = router;
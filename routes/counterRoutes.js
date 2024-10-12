const express = require('express');
const router = express.Router();
const {
    orderReceived,
    deliverOrder,
    receiveInstruments,
    showRecord,
} = require('../controllers/counterController');

router.post('/order-received', orderReceived);
router.post('/order-delivered', deliverOrder);
router.post('/instruments-received', receiveInstruments);
router.get('/show-record', showRecord);

module.exports = router;


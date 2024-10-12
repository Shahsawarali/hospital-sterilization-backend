const express = require('express');
const { addSterilizedProduct, requestItemPickup, placeOrder, showRecord } = require('../controllers/otController');

const router = express.Router();

// Operation Theater routes
router.post('/add-sterilized', addSterilizedProduct);  // Add sterilized product
router.post('/request-pickup', requestItemPickup);  // Request pickup for items needing sterilization
router.post('/place-order', placeOrder);  // Place new order for items
router.get('/show-record', showRecord);  // Show current stock record in OT

module.exports = router;

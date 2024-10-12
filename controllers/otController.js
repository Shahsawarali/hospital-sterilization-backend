const OTModel = require('../models/otItemModel');

// Add sterilized product
const addSterilizedProduct = async (req, res) => {
  try {
    const { itemName, quantity } = req.body;
    const newItem = new OTModel({ itemName, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error });
  }
};

// Request item pickup
const requestItemPickup = async (req, res) => {
  try {
    const { itemName, quantity } = req.body;  // Assuming you're sending this data
    // Logic for handling item pickup requests (you can modify this according to your app's needs)
    res.status(200).json({ message: `Pickup request for ${quantity} of ${itemName} received.` });
  } catch (error) {
    res.status(500).json({ message: 'Error processing pickup request', error });
  }
};


// Place new order
const placeOrder = async (req, res) => {
  try {
    const { itemName, quantity } = req.body;  // Assuming you will receive this data
    // Logic to handle placing an order (modify based on your business logic)
    res.status(200).json({ message: `Order for ${quantity} of ${itemName} placed successfully.` });
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error });
  }
};


// Show current stock
const showRecord = async (req, res) => {
  try {
    const items = await OTModel.find();  // Fetch all items
    res.status(200).json(items);  // Return the items as a response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching record', error });
  }
};


module.exports = {
  addSterilizedProduct,
  requestItemPickup,
  placeOrder,
  showRecord
};

// sterilizationController.js

exports.packetReceived = (req, res) => {
    // Logic for receiving packet from OT
    res.status(200).json({ message: 'Packet received from OT' });
};

exports.itemsSent = (req, res) => {
    // Logic for sending items to Counter
    res.status(200).json({ message: 'Items sent to Counter' });
};

exports.showRecord = (req, res) => {
    // Logic to show record of items (correct, damaged, repaired)
    res.status(200).json({ message: 'Displaying sterilization record' });
};

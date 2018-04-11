const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const travelSchema = new Schema({
    from: {
        bikepoint: { type: ObjectId, required: true },
        time: { type: Date, required: true }
    },
    to: {
        bikepoint: { type: ObjectId, required: true },
        time: { type: Date, required: true }
    },
    createdAt: { type: Date, default: Date.now }
});

travelSchema.index({'$**': 'text'});

module.exports = {
    TravelsCollection: mongoose.model('Travels', travelSchema)
};
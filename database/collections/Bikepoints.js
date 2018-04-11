const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bikepointsSchema = new Schema({
    commonName: { type: String, required: true },
    placeType: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
});
bikepointsSchema.index({'$**': 'text'});
module.exports = {
  BikepointsCollection: mongoose.model('Bikepoints', bikepointsSchema)
};
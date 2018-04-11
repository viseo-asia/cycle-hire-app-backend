const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bikepointsSchema = new Schema({
    commonName: { type: String },
    placeType: { type: String },
    lat: { type: Number },
    lng: { type: Number }
});
bikepointsSchema.index({'$**': 'text'});
module.exports = {
  BikepointsCollection: mongoose.model('Bikepoints', bikepointsSchema)
};
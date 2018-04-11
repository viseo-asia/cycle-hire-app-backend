const mongoose = require('mongoose');

const { Schema: { Types }, model } = mongoose;
const { String, Array, Number } = Types;

const bikepointsSchema = new Schema({
    type: { type: String },
    bikepoint_id: { type: String },
    url: { type: String },
    commonName: { type: String },
    placeType: { type: String },
    additionalProperties: { type: Array },
    children: { type: Array },
    childrenUrls: { type: Array },
    lat: { type: Number },
    lng: { type: Number }
});

module.exports = {
    BikepointsCollection: model('Bikepoints', bikepointsSchema)
};
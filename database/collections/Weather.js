const mongoose = require('mongoose');

const { Schema: { Types }, model } = mongoose;
const { String, ObjectId, Number } = Types;

const weatherSchema = new Schema({
    bikepointId: { type: ObjectId },
    coord: {
        lat: { type: Number },
        lng: { type: Number }
    },
    weather: {
        id: { type: Number },
        main: { type: String },
        description: { type: String },
        icon: { type: String }
    },
    base: { type: String },
    main: {
        temp: { type: Number },
        pressure: { type: Number },
        humidity: { type: Number },
        temp_min: { type: Number },
        temp_max: { type: Number },
        sea_level: { type: Number },
        grnd_level: { type: Number },
    },
    wind: {
        speed: { type: Number },
        deg: { type: Number },
    },
    sys: {
        message: { type: Number },
        country: { type: String },
        sunrise: { type: Number },
        sunset: { type: Number },
    },
    name: { type: String },
    cod: { type: Number }
});

module.exports = {
    WeatherCollection: model('Weather', weatherSchema)
};
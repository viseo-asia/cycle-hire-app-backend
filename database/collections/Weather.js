const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const weatherSchema = new Schema({
    bikepoint: { type: ObjectId, required: true },
    coord: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    weather: {
        id: { type: Number, required: true },
        main: { type: String, required: true },
        description: { type: String, required: true },
        icon: { type: String, required: true }
    },
    base: { type: String, required: true },
    main: {
        temp: { type: Number, required: true },
        pressure: { type: Number, required: true },
        humidity: { type: Number, required: true },
        temp_min: { type: Number, required: true },
        temp_max: { type: Number, required: true },
        sea_level: { type: Number, required: true },
        grnd_level: { type: Number, required: true },
    },
    wind: {
        speed: { type: Number, required: true },
        deg: { type: Number, required: true },
    },
    sys: {
        message: { type: Number, required: true },
        country: { type: String, required: true },
        sunrise: { type: Number, required: true },
        sunset: { type: Number, required: true },
    },
    name: { type: String, required: true },
    cod: { type: Number, required: true }
});

module.exports = {
    WeatherCollection: mongoose.model('Weather', weatherSchema)
};
const {bikepointLoader, bikepointFindById, bikepointSearch} = require('./model');
const { BikepointsCollection } = require('../../database/collections/Bikepoints');
/*
    docs: https://blog.tfl.gov.uk/2017/04/06/data-themes-1-cycling-in-the-city/
    example query: swLat=51.4953&swLon=-0.1369&neLat=51.5011&neLon=-0.1274
*/
const collection = BikepointsCollection;
const list = ({query}, res) =>
    collection.find((err, bikepoints) => {
        if (err) {
            res.status(500).send({data: err, message: err.message});
        } else {
            res.send({data: bikepoints, message: "Results found."})
        }
    });

const findOne = (req, res) =>
    collection.findOne({_id: req.params.id}, (err, bikepoint) => {
        if (err) {
            res.status(500).send({data: err, message: err.message});
        } else {
            res.send({data: bikepoint, message: "Results found."})
        }
    });

const search = ({query}, res) =>
    collection.findOne({$text: {$search: query.query }}, (err, bikepoint) => {
        if (err) {
            res.status(500).send({data: err, message: err.message});
        } else {
            res.send({data: bikepoint, message: "Results found."})
        }
    });

module.exports = {
    requestHandler: {
        getList: list,
        findOne,
        search
    }
};
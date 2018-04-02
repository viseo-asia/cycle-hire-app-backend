const fetch = require('node-fetch');
const { RequestHandler } = require('../../helpers/bikepoint-fetch-handler');

const api = RequestHandler();

const bikepointResource = (params) =>
        fetch(api.bikepoint().list(params))
        .then(r => r.json());

// const params = {swLat: 51.4953, swLon: -0.1369, neLat:51.5011, neLon: -0.1274}
// bikepointResource()
// .then(result => console.log(result)) //?

const bikepointLoader = (params) => 
    bikepointResource(params);

const bikepointFindById = (id) =>
    fetch(api.bikepoint().findOneById(id))
    .then(r => r.json());

const bikepointSearch = (query) =>
    fetch(api.bikepoint().search(query))
    .then(r => r.json());

module.exports = {
    bikepointLoader,
    bikepointFindById,
    bikepointSearch
};
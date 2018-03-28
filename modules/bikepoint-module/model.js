const fetch = require('node-fetch')
const DataLoader = require('dataloader')
const {RequestHandler} = require('../../helpers/bikepoint-fetch-handler')

const api = RequestHandler()

const bikepointResource = (keys) =>
    Promise.all(keys.map((key) => 
    fetch(api.bikepoint().list())
    .then(r => r.json())))

const bikepointLoader = () => {
    const loader = new DataLoader((keys) => bikepointResource(keys))
    return loader.load(0)
}

const bikepointFindById = (id) =>
    fetch(api.bikepoint().findOneById(id))
    .then(r => r.json())

const bikepointSearch = (query) =>
    fetch(api.bikepoint().search(query))
    .then(r => r.json())

module.exports = {
    bikepointResource,
    bikepointLoader,
    bikepointFindById,
    bikepointSearch
}
const fetch = require('node-fetch')
const DataLoader = require('dataloader')

const bikepointResource = (keys) =>
    Promise.all(keys.map((key) => fetch('https://api.tfl.gov.uk/bikepoint')
    .then(r => r.json())))

const bikepointLoader = () => {
    const loader = new DataLoader((keys) => bikepointResource(keys))
    return loader.load(0)
}

const bikepointFindById = (id) =>
    fetch(`https://api.tfl.gov.uk/bikepoint/${id}`)
    .then(r => r.json())

module.exports = {
    bikepointResource,
    bikepointLoader,
    bikepointFindById
}
const serverless = require('serverless-http');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fetch = require('node-fetch')
const DataLoader = require('dataloader')

const bikepointResource = async function (keys) {
    return Promise.all(keys.map(async (key) => {
        const response = await fetch('https://api.tfl.gov.uk/bikepoint')
        return response.json()
    }))
}

app.use(bodyParser.json({ strict: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/bikepoint', (req, res) => {
    const bikepointLoader = new DataLoader(async (keys) => await bikepointResource(keys))
    bikepointLoader.load(0)
    .then(data => res.send(data))
})

module.exports.handler = serverless(app);

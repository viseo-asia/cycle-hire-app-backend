const serverless = require('serverless-http');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fetch = require('node-fetch')
const DataLoader = require('dataloader')

const bikepointResource = (keys) =>
    Promise.all(keys.map((key) => fetch('https://api.tfl.gov.uk/bikepoint')
    .then(r => r.json())))

app.use(bodyParser.json({ strict: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/bikepoint', function(req, res) {
    const bikepointLoader = new DataLoader((keys) => bikepointResource(keys))
    bikepointLoader.load(0)
    .then(data => res.send(data))
})

module.exports.handler = serverless(app);

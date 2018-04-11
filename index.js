const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./database');
const mongoose = require('mongoose');
const routes = require('./routes');

app.use(bodyParser.json({ strict: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.Promise = global.Promise;
// establish connection to mongodb atlas
mongoose.connect(config.db.uri, config.db.options)
.catch(err => {
    console.log('An error occurred while attempting to connect to MongoDB', err)
    console.log(err)
    process.exit(1)
});

routes(app);

module.exports.handler = serverless(app);

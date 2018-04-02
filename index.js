const serverless = require('serverless-http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const bikepointModule = require('./modules/bikepoint-module');

app.use(bodyParser.json({ strict: false }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get(
    '/', 
    (req, res) => 
        res.send('Displaying this message means you are not authorized to view this route.')
);
app.get('/bikepoint', bikepointModule.requestHandler.getList);
app.get('/bikepoint/search', bikepointModule.requestHandler.search);
app.get('/bikepoint/:id', bikepointModule.requestHandler.findOne);

app.get('*', function(req, res){
    res.send({message: "Route not found"});
});

module.exports.handler = serverless(app);

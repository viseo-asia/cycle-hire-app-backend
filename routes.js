const bikepointModule = require('./modules/bikepoint-module');

const bikeModule = bikepointModule.requestHandler;

module.exports = (app) => {
    app.get(
        '/',
        (req, res) =>
            res.send('Displaying this message means you are not authorized to view this route.')
    );
    app.get('/bikepoint', bikeModule.getList);
    app.get('/bikepoint/search', bikeModule.search);
    app.get('/bikepoint/:id', bikeModule.findOne);

    app.get('*', function(req, res){
        res.send({ message: "Route not found" });
    });
};
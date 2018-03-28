const {bikepointLoader, bikepointFindById, bikepointSearch} = require('./model')

/* 
    docs: https://blog.tfl.gov.uk/2017/04/06/data-themes-1-cycling-in-the-city/
    example query: swLat=51.4953&swLon=-0.1369&neLat=51.5011&neLon=-0.1274
*/
const list = ({query}, res) => 
    bikepointLoader(query)
    .then(data => res.send({data, message: "Results found"}))
    .catch(error => res.status(500).send(error))

const findOne = (req, res) => 
    bikepointFindById(req.params.id)
    .then(data => res.send({data, message: "Results found"}))
    .catch(error => res.status(500).send(error))

const search = ({query}, res) => 
    bikepointSearch(query.query)
    .then(data => {
        let message
        if(!!data.length) {
            message = "Results found"
            res.status(200)
        } else {
            message = `Cannot find results for keyword ${query.query}`
            res.status(404)
        }
        return {data, message}
    })
    .then(response => res.send(response))
    .catch(error => res.status(500).send(error))

module.exports = {
    requestHandler: {
        getList: list,
        findOne,
        search
    }
}
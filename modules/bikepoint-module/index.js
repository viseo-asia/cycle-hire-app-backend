const {bikepointLoader, bikepointFindById, bikepointSearch} = require('./model')

const list = (req, res) => 
    bikepointLoader()
    .then(data => res.send({data, message: "Results found"}))
    .catch(error => res.status(500).send(error))

const findOne = (req, res) => 
    bikepointFindById(req.params.id)
    .then(data => res.send({data, message: "Results found"}))
    .catch(error => res.status(500).send(error))

const search = (req, res) => 
    bikepointSearch(req.query.query)
    .then(data => {
        let message
        if(!!data.length) {
            message = "Results found"
            res.status(200)
        } else {
            message = `Cannot find results for keyword ${req.query.query}`
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
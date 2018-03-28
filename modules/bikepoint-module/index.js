const {bikepointLoader, bikepointFindById, bikepointSearch} = require('./model')

const list = (req, res) => 
    bikepointLoader()
    .then(data => res.send({data, message: "Results found"}))
    .catch(error => res.send(error))

const findOne = (req, res) => 
    bikepointFindById(req.params.id)
    .then(data => res.send({data, message: "Results found"}))
    .catch(error => res.send(error))

const search = (req, res) => {
    return bikepointSearch(req.query.query)
    .then(data => {
        let message
        if(!!data.length) {
            message = "Results found"
        } else {
            message = `Cannot find match for: ${req.params.query}`
        }
        return {data, message}
    })
    .then(response => res.send(response))
    .catch(error => res.send(error))
}

module.exports = {
    requestHandler: {
        getList: list,
        findOne,
        search
    }
}
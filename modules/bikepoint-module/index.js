const {bikepointLoader, bikepointFindById} = require('./model')

const list = (req, res) => 
    bikepointLoader()
    .then(data => res.send({data, message: "Results found"}))
    .catch(error => res.send(error))

const findOne = (req, res) => 
    bikepointFindById(req.params.id)
    .then(data => res.send({data, message: "Results found"}))
    .catch(error => res.send(error))

module.exports = {
    requestHandler: {
        getList: list,
        findOne
    }
}
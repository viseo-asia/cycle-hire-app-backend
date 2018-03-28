/* reference: https://api.tfl.gov.uk/swagger/ui/index.html#!/BikePoint */

const RequestHandler = (baseUrl = "https://api.tfl.gov.uk") => ({
    bikepoint: (bikePointUrl = "BikePoint") => ({
        list: () => baseUrl + "/" + bikePointUrl + '/',
        findOneById: (id) => baseUrl + "/" + bikePointUrl + '/' + id,
        search: (query) => baseUrl + "/" + bikePointUrl + '/Search?query=' + query
    })
})

module.exports = {RequestHandler}
/* reference: https://api.tfl.gov.uk/swagger/ui/index.html#!/BikePoint */

const RequestHandler = (baseUrl = "https://api.tfl.gov.uk") => ({
    bikepoint: (bikePointUrl = "BikePoint") => ({
        list: (params) => {
            const reBaseUrl = baseUrl + "/" + bikePointUrl
            if(!!Object.keys(params).length) {
                console.log(Object.keys(params).length)
                const { swLat, swLon, neLat, neLon } = params
                return reBaseUrl + `?swLat=${swLat}&swLon=${swLon}&neLat=${neLat}&neLon=${neLon}`
            } 
            return reBaseUrl
        },
        findOneById: (id) => baseUrl + "/" + bikePointUrl + '/' + id,
        search: (query) => baseUrl + "/" + bikePointUrl + '/Search?query=' + query
    })
})

module.exports = {RequestHandler}
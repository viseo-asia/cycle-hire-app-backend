# AWS credential setup URL
https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html

# Deploy to AWS lambda
sls deploy --region ap-southeast-1

> Use this method when you have updated your Function, Event or Resource configuration in serverless.yml and you want to deploy that change (or multiple changes at the same time) to Amazon Web Services.

`Note: You can always enforce a deployment using the --force option.`

# run to local server
sls offline start

# logging
sls logs -f <fuctionName>

# API ENDPOINTS

> / GET bikepoint
`list of bikepoint`
### Filter by area
    > params: swLat , swLon , neLat , neLon
    > example: /bikepoint?swLat=51.4953&swLon=-0.1369&neLat=51.5011&neLon=-0.1274

> / GET bikepoint/:id
    ` Gets the bike point with the given id.`
    
> / GET bikepoint/search
    > params: query
    ```
        Search for bike stations by their name, a bike point's name often contains information about the name of the street or nearby landmarks, for example. Note that the search result does not contain the PlaceProperties i.e. the status or occupancy of the BikePoint, to get that information you should retrieve the BikePoint by its id on 
    ```

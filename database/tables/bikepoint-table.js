import { resolve } from "url";

const AWS = require("aws-sdk");

const USERS_TABLE = process.env.USERS_TABLE;
const IS_OFFLINE = process.env.IS_OFFLINE;
let dynamoDb;

if (IS_OFFLINE === 'true') {
    console.log('offline mode')
  dynamoDb = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  })
} else {
  dynamoDb = new AWS.DynamoDB.DocumentClient();
}

const params = {
    TableName : "Movies",
    KeySchema: [       
        { AttributeName: "year", KeyType: "HASH"},  //Partition key
        { AttributeName: "title", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [       
        { AttributeName: "year", AttributeType: "N" },
        { AttributeName: "title", AttributeType: "S" }
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 10, 
        WriteCapacityUnits: 10
    }
};

dynamoDb
.createTable(params, (err, data) => 
    new Promise((resolve, reject) => {
        if(err)  reject(err);
        resolve(data)
    })
);
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
  var body = JSON.parse(event.body)

  if (!body || !body.phone) {
    console.log("No phone")
    callback(null, {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify({
        message: "[400] Phone number not provided"
      })
    })
  }
  var params = {
    "TableName": "Subscribers",
    "Item": {
      "Phone": body.phone,
      "OrdersCount": 0
    }
  }
  docClient.put(params, function (err, data) {
    if (err) {
      callback(null, {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin" : "*"
        },
        body: JSON.stringify({
          message: "[400] Phone number not provided"
        } )
      })
    } else {
      callback(null, {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin" : "*"
        }
      })
    }
  });
}

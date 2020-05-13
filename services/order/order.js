// demonstrate the communication with Order service by using message queue (Amazon SQS)
// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

// Set the region 
AWS.config.update({ region: 'us-east-1' });

// Create an SQS service object
const sqs = new AWS.SQS({ apiVersion: '2020-05-13' });

var order = {
    get: function (req, res, next) {
        // TBD
    },
    getMany: function (req, res, next) {
        // TBD
    },
    create: function (req, res, next) {
        // TBD
        // Send message to Amazon SQS to send information about order
        const { userEmail, itemName, itemPrice, quantity } = req.body;
        let orderData = { userEmail, itemName, itemPrice, quantity };
        var params = {
            MessageAttributes: {
                'userEmail': {
                    DataType: 'String',
                    StringValue: userEmail
                },
                'itemName': {
                    DataType: 'String',
                    StringValue: itemName
                },
                'itemPrice': {
                    DataType: 'Number',
                    StringValue: itemPrice
                },
                'quantity': {
                    DataType: 'Number',
                    StringValue: quantity
                }
            },
            MessageBody: JSON.stringify(orderData),
            QueueUrl: 'SQS_QUEUE_URL'   // TBD
        };
        let promise = sqs.sendMessage(params).promise();
        promise.then((data) => {
            console.log('Success', data.MessageId);
        }).catch((err) => {
            console.log('Error', err);
        });
    },
    update: function (req, res, next) {
        // TBD
    },
    delete: function (req, res, next) {
        // TBD
    },
};

module.exports = order;
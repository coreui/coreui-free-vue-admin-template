const AWS = require('aws-sdk');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    try {
        // Create an SNS client
        const sns = new AWS.SNS();

        // Define the SNS topic ARN
        const topicArn = 'arn:aws:sns:ap-southeast-1:590183969838:RequestRetake';

        // Define the message to be published
        const message = 'AK from Class A request to retake English Paper';

        // Publish the message to the SNS topic
        const publishParams = {
            Message: message,
            TopicArn: topicArn
        };

        await sns.publish(publishParams).promise();

        console.log('Message published to SNS topic successfully');

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify('Message published to SNS topic'),
        };
    } catch (error) {
        console.error('Error publishing message to SNS topic:', error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify('Error publishing message to SNS topic'),
        };
    }
};

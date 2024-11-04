const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const { saveJsonToS3 } = require('../utils/s3Helpers');

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    const { eTag, url } = await saveJsonToS3(data);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ e_tag: eTag, url }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to store data' }),
    };
  }
};

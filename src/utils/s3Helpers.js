const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const BUCKET_NAME = process.env.BUCKET_NAME;

async function saveJsonToS3(data) {
  const fileName = `data-${Date.now()}.json`;
  const params = {
    Bucket: BUCKET_NAME,
    Key: fileName,
    Body: JSON.stringify(data),
    ContentType: 'application/json'
  };

  const result = await s3.upload(params).promise();
  return { eTag: result.ETag, url: result.Location };
}

async function getAllJsonFromS3() {
  const params = { Bucket: BUCKET_NAME };
  const allObjects = await s3.listObjectsV2(params).promise();
  const dataPromises = allObjects.Contents.map(async (item) => {
    const object = await s3.getObject({ Bucket: BUCKET_NAME, Key: item.Key }).promise();
    return JSON.parse(object.Body.toString());
  });
  
  return await Promise.all(dataPromises);
}

module.exports = { saveJsonToS3, getAllJsonFromS3 };

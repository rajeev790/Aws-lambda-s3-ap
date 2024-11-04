const { getAllJsonFromS3 } = require('../src/utils/s3Helpers');

test('should retrieve all JSON data from S3', async () => {
  const response = await getAllJsonFromS3();
  
  expect(Array.isArray(response)).toBe(true);
});

const { saveJsonToS3 } = require('../src/utils/s3Helpers');

test('should save JSON data to S3 and return eTag and URL', async () => {
  const data = { name: 'John', age: 30 };
  const response = await saveJsonToS3(data);

  expect(response).toHaveProperty('eTag');
  expect(response).toHaveProperty('url');
});

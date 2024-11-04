const { getAllJsonFromS3 } = require('../utils/s3Helpers');

exports.handler = async () => {
  try {
    const allData = await getAllJsonFromS3();
    
    return {
      statusCode: 200,
      body: JSON.stringify(allData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to retrieve data' }),
    };
  }
};

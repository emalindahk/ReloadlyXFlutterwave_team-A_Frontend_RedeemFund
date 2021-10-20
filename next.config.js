
module.exports = {
    images: {
      domains: [
        `${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`,
        `${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com`,
        'cdn.reloadly.com'
      ],
    },
    env: {
      BASE_API_URL: process.env.BASE_API_URL,
      AIRTABLE_API_KEY : process.env.AIRTABLE_API_KEY,
    },
  };
  
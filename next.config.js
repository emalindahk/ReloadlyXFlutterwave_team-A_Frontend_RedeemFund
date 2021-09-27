// next.config.js

module.exports = {
    images: {
      domains: [
        `${process.env.S3_UPLOAD_BUCKET}.s3.amazonaws.com`,
        `${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com`,
      ],
    },
    env: {
      NEXT_BASE_API_URL: process.env.NEXT_BASE_API_URL,
    }
  };
  

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
    },
    exportPathMap: async function ( ) {
      return {
        '/campaign/slug': { page: '/campaign/[slug]' }
      }
    },
  };
  
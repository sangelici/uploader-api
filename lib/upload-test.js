
require('dotenv').config()
// require file system
const fs = require('fs') // fs is included in node
// require AWS SDK
const AWS = require('aws-sdk')
// set region
AWS.config.update({ region: 'us-east-1' })
// Create s3 object instance
const s3 = new AWS.S3()
console.log(s3)

// Access command line arguments to get this file path
const filePath = process.argv[2]
// Define bucket based on environment variable
const bucketName = process.env.BUCKET_NAME
console.log(bucketName)

fs.readFile(filePath, (err, data) => {
  if (err) throw err

  console.log(data)
})

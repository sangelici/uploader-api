require('dotenv').config()
const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  file: {
    // type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

// do a virtual property that generates the file url location
uploadSchema.virtual('fileUrl').get(function () {
  const bucketName = process.env.BUCKET_NAME
  // generate url
  const url = `https://${bucketName}.s3.amazonaws.com/${this.fileName}`
  // return the value
  return url
})

module.exports = mongoose.model('Upload', uploadSchema)

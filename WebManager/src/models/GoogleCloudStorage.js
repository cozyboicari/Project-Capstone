const { Storage } = require('@google-cloud/storage')

const serviceAccount = require('../../YourTourServiceKey.json')

const storage = new Storage({
  projectId: 'yourtour-c4d0f',
  keyFilename: serviceAccount,
})

const bucket = storage.bucket('yourtour-c4d0f.appspot.com')

module.exports = bucket

const firebase = require('firebase-admin')
const serviceAccount = require('../../YourTourServiceKey.json')

const admin = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://yourtour-c4d0f.firebaseio.com',
})
const db = admin.firestore()
module.exports = db

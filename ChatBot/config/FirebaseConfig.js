const firebase = require('firebase-admin');
const serviceAccount = require('../config/YourTourServiceKeyChatBot.json');

const admin = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://yourtour-c4d0f.firebaseio.com',
    storageBucket: 'yourtour-c4d0f.appspot.com',
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { db, bucket };
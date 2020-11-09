const firebase = require('firebase-admin');
const serviceAccount = require('../../YourTourServiceKey.json');

const admin = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});
module.exports = admin;
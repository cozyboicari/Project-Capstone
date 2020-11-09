const admin = require('../models/FirebaseAdmin')
module.exports = async function (req, res) {
  const snapshot = await admin.firestore().collection('admin').doc('admin1').get();
  const { username, password } = req.body;
  if (username && password) {
    if (username === snapshot.data().username && password === snapshot.data().password) {
      req.session.loggedIn = true;
      req.session.username = username;
      res.redirect("/");
    } else {
      res.redirect("/");
    }
    res.end();
  }
}
const db = require('../models/FirebaseAdmin')

module.exports = async (req, res) => {
  const snapshot = await db.collection('admin').doc('admin1').get()
  const { username, password } = req.body
  if (username && password) {
    if (
      username === snapshot.data().username &&
      password === snapshot.data().password
    ) {
      req.session.loggedIn = true
      req.session.username = username
      res.redirect('/')
    } else {
      res.redirect('/')
    }
    res.end()
  }
}

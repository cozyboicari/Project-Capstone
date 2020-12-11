const bcrypt = require('bcrypt')
const db = require('../models/FirebaseAdmin')

module.exports = async (req, res) => {
  const { username, password } = req.body
  const snapshot = await db
    .collection('admin')
    .doc('dO6if1wo65LceUctnuId')
    .get()

  if (username && password) {
    const match = await bcrypt.compare(password, snapshot.data().password)
    if (username === snapshot.data().username && match) {
      req.session.loggedIn = true
      req.session.username = username
      res.redirect('/')
    } else {
      res.redirect('/')
    }
    res.end()
  }
}

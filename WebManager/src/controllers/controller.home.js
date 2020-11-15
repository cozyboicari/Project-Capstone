const db = require('../models/FirebaseAdmin')

module.exports = async (req, res) => {
  const snapshot = await db.collection('admin').doc('admin1').get()
  // const data = snapshot.docs.map(doc => {
  //     return { id: doc.id, ...doc.data() }
  // })
  res.send([snapshot.data().username, snapshot.id])
}

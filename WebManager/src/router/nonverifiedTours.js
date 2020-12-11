const express = require('express')

const app = express()

const router = express.Router()

const db = require('../models/FirebaseAdmin')

const redirectIfUnauthenticatedMiddleware = require('../middleware/redirectIfUnauthenticatedMiddleware')

router
  .get('/', async (req, res, next) => {
    try {
      const snapshotTour = await db.collection('nonverifiedTours').get()
      const nonverifiedTours = snapshotTour.docs.map((doc) => {
        const { id } = doc
        const data = doc.data()
        return { id, ...data }
      })
      app.set('nonverifiedTours', nonverifiedTours)
      res.render('nonverifiedtours', { nonverifiedTours })
    } catch (err) {
      next(err)
    }
  })
  // .post('/', upload.single('image'), async (req, res, next) => {
  //   try {
  //     const { id, name, description } = req.body
  //     const { file } = req
  //     if (file) {
  //       uploadImageToStorage(file)
  //         .then((success) => {
  //           res.status(200).send({
  //             status: 'success',
  //           })
  //         })
  //         .catch((error) => {
  //           console.error(error)
  //         })
  //     }
  //     const imageBase64 = req.file.buffer.toString('base64')
  //     const image = `data:image/jpg;base64,${imageBase64}`
  //     await db.collection('countries').doc(id.replace(/\s+/g, '')).set({
  //       image,
  //       name,
  //       description,
  //       visitors: 0,
  //       tours: [],
  //     })
  //     res.redirect('/tours')
  //   } catch (err) {
  //     next(err)
  //   }
  // })
  .delete('/delete/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      await db.collection('nonverifiedTours').doc(id).delete()
      res.end()
    } catch (err) {
      next(err)
    }
  })
  .get('/view/:id', async (req, res, next) => {
    try {
      const nonverifiedTours = app.get('nonverifiedTours')
      const dataTour = nonverifiedTours.find((doc) => doc.id === req.params.id)
      app.set('dataTour', dataTour)
      res.render('verifytour', { dataTour })
    } catch (err) {
      next(err)
    }
  })
  .post('/view/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      const dataTour = app.get('dataTour')
      const { tourguideID } = dataTour
      const avtImg =
        'https://firebasestorage.googleapis.com/v0/b/yourtour-c4d0f.appspot.com/o/5e49ec7ad607a_thumb900.jpg?alt=media&token=45ddbffa-2220-4aba-808d-0327bad81578'
      const docSnapshot = await db
        .collection('travelers')
        .where('uID', '==', tourguideID)
        .get()
      const docID = docSnapshot.docs.map((doc) => doc.id).toString()
      await db.collection('tours').doc(id).set(dataTour, { merge: true })
      await db
        .collection('travelers')
        .doc(docID)
        .collection('notification')
        .doc()
        .set({
          avtImg,
          message: 'Tour của bạn đã được duyệt!',
          date: new Date().getTime(),
        })
      await db.collection('nonverifiedtours').doc(id).delete()
      res.redirect('/nonverifiedtours')
    } catch (err) {
      next(err)
    }
  })
module.exports = router

const express = require('express')

const app = express()

const router = express.Router()

const multer = require('multer')

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // giới hạn 5mb
  },
})

const db = require('../models/FirebaseAdmin')

const redirectIfUnauthenticatedMiddleware = require('../middleware/redirectIfUnauthenticatedMiddleware')

router
  .get('/', redirectIfUnauthenticatedMiddleware, async (req, res, next) => {
    try {
      const snapshotTour = await db.collection('tours').get()
      const tours = snapshotTour.docs.map((doc) => {
        const { id } = doc
        const data = doc.data()
        return { id, ...data }
      })
      app.set('tours', tours)
      res.render('tours', { tours })
    } catch (err) {
      next(err)
    }
  })
  .delete(
    '/delete/:id',
    redirectIfUnauthenticatedMiddleware,
    async (req, res, next) => {
      try {
        const { id } = req.params
        await db.collection('tours').doc(id).delete()
        res.end()
      } catch (err) {
        next(err)
      }
    },
  )
  .get(
    '/edit/:id',
    redirectIfUnauthenticatedMiddleware,

    async (req, res, next) => {
      try {
        const tours = app.get('tours')
        const dataTour = tours.find((doc) => doc.id === req.params.id)
        res.render('edittour', { dataTour })
      } catch (err) {
        next(err)
      }
    },
  )
  .post(
    '/edit/:id',
    redirectIfUnauthenticatedMiddleware,
    upload.single('image'),
    async (req, res, next) => {
      try {
        const { id } = req.params
        const { name, description } = req.body
        if (req.file) {
          const imageBase64 = req.file.buffer.toString('base64')
          const image = `data:image/jpg;base64,${imageBase64}`
          await db
            .collection('tours')
            .doc(id)
            .update({ image, name, description }, { merge: true })
          res.redirect('/cities')
        } else {
          await db
            .collection('countries')
            .doc(id)
            .update({ name, description }, { merge: true })
          res.redirect('/cities')
        }
      } catch (err) {
        next(err)
      }
    },
  )
module.exports = router

const express = require('express')

const app = express()

const router = express.Router()

const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage })

const db = require('../models/FirebaseAdmin')

const redirectIfUnauthenticatedMiddleware = require('../middleware/redirectIfUnauthenticatedMiddleware')

router
  .get('/', async (req, res, next) => {
    try {
      const snapshotCities = await db
        .collection('countries')
        .doc('vietnam')
        .collection('cities')
        .get()
      const cities = snapshotCities.docs.map((doc) => {
        const { id } = doc
        const data = doc.data()
        return { id, ...data }
      })
      app.set('cities', cities)
      res.render('cities', { cities })
    } catch (err) {
      next(err)
    }
  })
  .post('/', upload.single('image'), async (req, res, next) => {
    try {
      const { id, name, description } = req.body
      const imageBase64 = req.file.buffer.toString('base64')
      const image = `data:image/jpg;base64,${imageBase64}`
      await db
        .collection('countries')
        .doc('vietnam')
        .collection('cities')
        .doc(id.replace(/\s+/g, ''))
        .set({
          image,
          name,
          description,
          visitors: 0,
          tours: [],
        })
      res.redirect('/cities')
    } catch (err) {
      next(err)
    }
  })
  .delete('/delete/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      await db
        .collection('countries')
        .doc('vietnam')
        .collection('cities')
        .doc(id)
        .delete()
      res.end()
    } catch (err) {
      next(err)
    }
  })
  .get(
    '/edit/:id',

    async (req, res, next) => {
      try {
        const cities = app.get('cities')
        const dataCity = cities.find((doc) => doc.id === req.params.id)
        res.render('editcity', { dataCity })
      } catch (err) {
        next(err)
      }
    },
  )
  .post(
    '/edit/:id',

    upload.single('image'),
    async (req, res, next) => {
      try {
        const { id } = req.params
        const { name, description } = req.body
        if (req.file) {
          const imageBase64 = req.file.buffer.toString('base64')
          const image = `data:image/jpg;base64,${imageBase64}`
          await db
            .collection('countries')
            .doc('vietnam')
            .collection('cities')
            .doc(id)
            .update({ image, name, description }, { merge: true })
          res.redirect('/cities')
        } else {
          await db
            .collection('countries')
            .doc('vietnam')
            .collection('cities')
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

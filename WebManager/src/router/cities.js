const express = require('express')

const app = express()

const router = express.Router()

const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage })

const db = require('../models/FirebaseAdmin')

router
  .get('/', async (req, res, next) => {
    try {
      const snapshotCities = await db
        .collection('countries')
        .doc('vietnam')
        .collection('cities')
        .get()
      const cities = snapshotCities.docs.map((doc) => doc.data())
      const idCities = snapshotCities.docs.map((doc) => doc.id)
      const dataCities = cities.map((data) => {
        const city = Object.assign({}, data)
        city.idCity = idCities.shift()
        return city
      })
      app.set('dataCities', dataCities)
      res.render('cities', { dataCities })
      res.end()
    } catch (err) {
      next(err)
    }
  })
  .get('/edit/:id', async (req, res, next) => {
    try {
      const dataCities = app.get('dataCities')
      const dataCity = dataCities.find((doc) => doc.idCity === req.params.id)
      res.render('editcity', { dataCity })
      res.end()
    } catch (err) {
      next(err)
    }
  })
  .post('/edit/:id', upload.single('image'), async (req, res, next) => {
    try {
      const idCity = req.params.id
      const { name, description } = req.body
      if (req.file) {
        const imageBase64 = req.file.buffer.toString('base64')
        const image = `data:image/jpg;base64,${imageBase64}`
        await db
          .collection('countries')
          .doc('vietnam')
          .collection('cities')
          .doc(idCity)
          .update({ image, name, description }, { merge: true })
        res.redirect('/cities')
        res.end()
      } else {
        await db
          .collection('countries')
          .doc('vietnam')
          .collection('cities')
          .doc(idCity)
          .update({ name, description }, { merge: true })
        res.redirect('/cities')
        res.end()
      }
    } catch (err) {
      next(err)
    }
  })
module.exports = router

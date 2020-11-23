const express = require('express')

const app = express()

const router = express.Router()

const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({ storage })

const { db, bucket } = require('../models/FirebaseAdmin')

router
  .get('/', async (req, res, next) => {
    try {
      const snapshotTourguides = await db
        .collection('travelers')
        .where('isActive', '==', true)
        .get()
      const tourguides = snapshotTourguides.docs.map((doc) => {
        const { id } = doc
        const data = doc.data()
        return { id, ...data }
      })
      app.set('tourguides', tourguides)
      res.render('managertourguides', { tourguides })
    } catch (err) {
      next(err)
    }
  })
  .delete('/delete/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      await db.collection('travelers').doc(id).delete()
      res.end()
    } catch (err) {
      next(err)
    }
  })
  .get('/edit/:id', async (req, res, next) => {
    try {
      const tourguides = app.get('tourguides')
      const dataTourguide = tourguides.find((doc) => doc.uID === req.params.id)
      const snapshotCities = await db
        .collection('countries')
        .doc('vietnam')
        .collection('cities')
        .get()
      const cities = snapshotCities.docs.map((doc) => doc.id)
      res.render('edittourguide', { dataTourguide, cities })
    } catch (err) {
      next(err)
    }
  })
  .post('/edit/:id', upload.single('image'), async (req, res, next) => {
    try {
      const {
        name,
        phone,
        idCity,
        description,
        passions,
        email,
        languages,
      } = req.body
      const convertGender = req.body.gender
      const convertIsActive = req.body.isActive
      const gender = convertGender === 'Male'
      const isActive = convertIsActive === 'True'
      const { id } = req.params
      if (req.file) {
        const imageBase64 = req.file.buffer.toString('base64')
        const image = `data:image/jpg;base64,${imageBase64}`
        await db.collection('travelers').doc(id).update(
          {
            picture: image,
            name,
            phone,
            idCity,
            description,
            passions,
            email,
            languages,
            isActive,
            gender,
          },
          { merge: true },
        )
        res.redirect('/managertourguides')
      } else {
        await db.collection('travelers').doc(id).update(
          {
            name,
            phone,
            idCity,
            description,
            passions,
            email,
            languages,
            isActive,
            gender,
          },
          { merge: true },
        )
        res.redirect('/managertourguides')
      }
    } catch (err) {
      next(err)
    }
  })

module.exports = router

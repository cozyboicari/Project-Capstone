/* eslint-disable no-restricted-syntax */
const express = require('express')

const app = express()

const router = express.Router()

const db = require('../models/FirebaseAdmin')

router
  .get('/', async (req, res, next) => {
    try {
      const snapshotAnswer = await db.collection('questions').get()
      const snapshotTravelers = await db
        .collection('travelers')
        .where('isActive', '==', false)
        .get()
      const answerData = snapshotAnswer.docs.map((doc) => doc.data())
      const travelersData = snapshotTravelers.docs.map((doc) => doc.data())
      const becometourguide = travelersData.filter((doc) => {
        for (let data of answerData) {
          return doc.uID === data.idTraveler
        }
      })
      app.set('answerData', answerData)
      res.render('becometourguide', { becometourguide })
      res.end()
    } catch (err) {
      next(err)
    }
  })
  .get('/view/:id', async (req, res, next) => {
    try {
      const data = app.get('answerData')
      const answerData = data.find((doc) => doc.idTraveler === req.params.id)
      const answerDetailData = answerData.questions.map((doc) => doc)
      res.render('detailanswer', {
        answerDetailData,
        id: answerData.idTraveler,
      })
      res.end()
    } catch (err) {
      next(err)
    }
  })
  .post('/view/:id', async (req, res, next) => {
    try {
      const ref = await db
        .collection('travelers')
        .where('uID', '==', req.params.id)
        .get()
      const idData = ref.docs[0].id
      const snapshotAnswer = await db.collection('questions').get()
      const data = snapshotAnswer.docs.map((doc) => doc.data())
      const answerData = data.find((doc) => doc.idTraveler === req.params.id)
      const idCity = answerData.questions[1].answer
      const languages = answerData.questions[4].answer.toString()
      await db
        .collection('travelers')
        .doc(idData)
        .update({ isActive: true, idCity, languages }, { merge: true })
      res.redirect('/becometourguide')
      res.end()
    } catch (err) {
      next(err)
    }
  })
module.exports = router

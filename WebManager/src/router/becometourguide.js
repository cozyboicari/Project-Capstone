/* eslint-disable no-restricted-syntax */
const express = require('express')

const app = express()

const router = express.Router()

const { db, bucket } = require('../models/FirebaseAdmin')

router
  .get('/', async (req, res, next) => {
    try {
      const snapshotAnswer = await db.collection('questions').get()
      const snapshotTravelers = await db
        .collection('travelers')
        .where('isActive', '==', false)
        .get()
      const answerData = snapshotAnswer.docs.map((doc) => {
        const { id } = doc
        const data = doc.data()
        return { id, ...data }
      })
      const travelersData = snapshotTravelers.docs.map((doc) => {
        const { id } = doc
        const data = doc.data()
        return { id, ...data }
      })
      const becometourguide = travelersData.filter((doc) => {
        for (const data of answerData) {
          if (doc.uID === data.idTraveler) {
            return true
          }
        }
        return false
      })

      app.set('answerData', answerData)
      app.set('becometourguide', becometourguide)
      res.render('becometourguide', { becometourguide })
    } catch (err) {
      next(err)
    }
  })

  .get('/view/:id', async (req, res, next) => {
    try {
      const answerData = app.get('answerData')
      const exactAnswerData = answerData.find(
        (doc) => doc.idTraveler === req.params.id,
      )
      app.set('exactAnswerData', exactAnswerData)
      const answerDetailData = exactAnswerData.questions.map((doc) => doc)
      res.render('detailanswer', {
        answerDetailData,
        id: exactAnswerData.idTraveler,
        idForm: exactAnswerData.id,
      })
    } catch (err) {
      next(err)
    }
  })
  .post('/view/:id', async (req, res, next) => {
    try {
      const becometourguide = app.get('becometourguide')
      const id = becometourguide
        .map((doc) => {
          if (doc.uID === req.params.id) {
            return doc.id
          }
          return ''
        })
        .toString()
      const exactAnswerData = app.get('exactAnswerData')
      const idCity = exactAnswerData.questions[1].answer
      const languages = exactAnswerData.questions[4].answer.toString()
      await db
        .collection('travelers')
        .doc(id)
        .update({ isActive: true, idCity, languages }, { merge: true })
      res.redirect('/becometourguide')
    } catch (err) {
      next(err)
    }
  })
  .delete('/delete/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      await db.collection('questions').doc(id).delete()
      res.redirect('/becometourguide')
    } catch (err) {
      next(err)
    }
  })
module.exports = router

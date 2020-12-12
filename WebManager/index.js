require('dotenv').config()

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const ejs = require('ejs')
const expressSession = require('express-session')
const bcrypt = require('bcrypt')

const port = process.env.PORT || 8080

const app = express()

app.use(
  helmet({
    contentSecurityPolicy: false,
  }),
)

const authRoute = require('./src/router/auth')

const citiesRoute = require('./src/router/cities')

const travelerRoute = require('./src/router/travelers')

const tourguideRoute = require('./src/router/tourguides')

const becometourguide = require('./src/router/becometourguide')

const tourRoute = require('./src/router/tours')

const nonverifiedTourRoute = require('./src/router/nonverifiedTours')

const db = require('./src/models/FirebaseAdmin')

const redirectIfUnauthenticatedMiddleware = require('./src/middleware/redirectIfAuthenticatedMiddleware')

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.static('./src/public'))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.set('trust proxy', 1)

const expiryDate = new Date(Date.now() + 60 * 60 * 1000)
app.use(
  expressSession({
    secret: 'keyboard cat',
    cookie: {
      httpOnly: true,
      expires: expiryDate,
    },
  }),
)
app.use('/', authRoute)

app.use('/cities', citiesRoute)

app.use('/managertravelers', travelerRoute)

app.use('/managertourguides', tourguideRoute)

app.use('/becometourguide', becometourguide)

app.use('/tours', tourRoute)

app.use('/nonverifiedtours', nonverifiedTourRoute)

global.loggedIn = null
app.get('/', async (req, res, next) => {
  try {
    if (req.session.loggedIn) {
      const [snapshot, snapshotTours, snapshotBookings] = await Promise.all([
        db.collection('travelers').get(),
        db.collection('tours').get(),
        db.collection('bookings').get(),
      ])
      const snapshotData = snapshot.docs.map((doc) => doc.data())

      const tours = snapshotTours.docs.map((doc) => doc.data())
      const bookings = snapshotBookings.docs.map((doc) => doc.data())
      const tourguides = snapshotData.filter((doc) => doc.isActive === true)

      res.render('admin', {
        numberTourguides: tourguides.length,
        numberTours: tours.length,
        numberBookings: bookings.length,
      })

      res.end()
    } else res.render('login')
  } catch (err) {
    next(err)
  }
})

app.get('/test', async (req, res) => {
  res.render('test')
  // const snapshot = await db.collection('travelers').get()
  // const data = snapshot.docs.map((doc) => doc.data())
  // res.render('test', { data: data.length })
})

app.listen(port, () => {
  console.log(`Server is listening on ${port} port`)
})

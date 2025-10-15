const functions = require('firebase-functions')
const express = require("express")
const app = express();
const usersRouter = require('./api/controllers/users_controller')
const remindersRouter = require('./api/controllers/reminders_controller')
const bloodPressureRouter = require('./api/controllers/bloodPressure_controller')
const calorieRouter = require('./api/controllers/calorie_controller')
const dailyRouter = require('./api/controllers/dailyData_controller')


app.use(express.json())
app.use('/users', usersRouter)
app.use('/reminders', remindersRouter)
app.use('/bloodPressure', bloodPressureRouter)
app.use('/calorie', calorieRouter)
app.use('/dailyData', dailyRouter)


exports.api = functions.https.onRequest(app)

exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300
})

//exports.setupdb = functions.https.onRequest(require('./setup_database'))
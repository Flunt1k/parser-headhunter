module.exports = function middleWare(app) {
  const express = require('express')
  const morgan = require('morgan')
  const cookieParser = require('cookie-parser')
  const session = require('express-session')
  const MongoStore = require('connect-mongo')(session)
  const passport = require('passport')
  const path = require('path')
  const keys = require('../keys/keys')
  const mongoose = require('mongoose')
  const setLocal = require('../middleware/setLocalVariable')

  mongoose.connect(keys.mongoKey, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const options = {
    mongooseConnection: mongoose.connection,
    ttl: 60*60*24
  }

  app.use(morgan('dev'))
  app.use(express.urlencoded({extended: true}))
  app.use(express.json())
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, '..', './public')))
  app.use(session({
    store: new MongoStore(options),
    secret: 'project',
    name: 'user_sid',
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: '/',
      httpOnly: true,
      maxAge: 1000*60*60*24
    }
  }))
  app.use(passport.initialize());
  app.use(passport.session());
  require('../auth/passport')
  app.use(setLocal)



  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, '..', './views'))
}


const express = require('express')
const controller = require('../controller/auth')
const passport = require('passport')
const router = express.Router()

router.post('/login', function(req, res, next){
  passport.authenticate('local', function(err, user, info) {
    if (!user) {
      res.json(info)
    } else {
      req.login(user, err => {
        if (err) console.log(err)
      })
      next()
    }
  })(req, res, next)
}, controller.login)

router.post('/registration', controller.registration)

router.get('/logout', controller.logout)

module.exports = router

const Employer = require('../models/Employer')
const Employee = require('../models/Employee')
const passport = require('passport')
const bcrypt = require('bcrypt')

module.exports.login = function(req, res) {
  res.status(200).json({
    success: true,
    message: 'User has been logged',
  })
}

module.exports.registration = async function(req, res) {
  const salt = 10
  const {email, name, password, radioSelected} = req.body
  let candidate
  if (radioSelected === 'employee') {
    candidate = await Employee.findOne({email})
    if (candidate) {
      res.status(409).json({
        success: false,
        message: 'User already exist',
      })
    } else {
      const hashedPassword = bcrypt.hashSync(password, salt)
      const user = new Employee({
        email, username: name, password: hashedPassword,
      })
      await user.save()
      req.login(user, err => {
        if (err) console.log(err)
        res.status(201).json({
          success: true,
          message: 'User created!',
        })
      })

    }
  } else {
    candidate = await Employer.findOne({email})
    if (candidate) {
      res.status(409).json({
        success: false,
        message: 'User already exist',
      })
    } else {
      const hashedPassword = bcrypt.hashSync(password, salt)
      const user = new Employer({
        email, username: name, password: hashedPassword,
      })

      await user.save()
      req.login(user, err => {
        if (err) console.log(err)
        res.status(201).json({
          success: true,
          message: 'User created!',
        })
      })
    }
  }
}

module.exports.logout = async function(req, res) {
  req.logout();
  req.session.destroy()
  res.clearCookie('user_cookie')
  res.redirect('/')
}

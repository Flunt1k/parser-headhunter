const express = require('express');
const isAuth = require('../middleware/isAuthenticated')

const router = express.Router();

router.get('/', isAuth, (req, res) => {
  const user = req.user
  const status = user.status
  let typeOfProfile
  if (status === 'employee') typeOfProfile = true
  else typeOfProfile = false
  res.render('profile', {typeOfProfile, user})
});

module.exports = router

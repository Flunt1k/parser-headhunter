const express = require('express')
const isAuth = require('../middleware/isAuthenticated')
const controller = require('../controller/parser')
const router = express.Router()

router.get('/', isAuth, (req, res) => {
  res.render('parser')
})

router.post('/info/:id', isAuth, controller.getMoreInfo)

router.put('/vacancy', isAuth, controller.updateVacancies)
router.put('/cv', isAuth, controller.updateCV)


module.exports = router


const express = require('express');
const Vacancy = require('../models/Vacancy')
const CV = require('../models/CV')

const getDescription = require('../utils/parser/getMoreInfo');

const router = express.Router();

router.get('/', async (req, res) => {
  const cv = await CV.find({}).limit(5)
  const vacancy = await Vacancy.find({}).limit(5)
  
  res.render('main', {cv, vacancy});
});

router.post('/info', async (req, res) => {
  const addInfo = await getDescription(req.body.id);
  res.send(addInfo);
});

module.exports = router;

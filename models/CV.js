const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cvSchema = Schema({
  position: String,
  age: String,
  salary: String,
  experience: String,
  lastWork: String,
  href: String,
  type: String,
  from: String
})

module.exports = mongoose.model('cv-third-party', cvSchema)

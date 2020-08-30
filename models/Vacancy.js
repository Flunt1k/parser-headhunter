const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vacSchema = Schema({
  offer: String,
  salary: String,
  href: String,
  publicDate: String,
  type: String,
  from: String,
  company: String,
})

module.exports = mongoose.model('vacancy-third-party', vacSchema)

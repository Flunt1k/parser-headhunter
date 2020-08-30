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
  description: String,
  employeeId: {type: Schema.Types.ObjectID, ref: 'employee'},
  status: {type: String, default: 'Local'}
})

module.exports = mongoose.model('cv', cvSchema)

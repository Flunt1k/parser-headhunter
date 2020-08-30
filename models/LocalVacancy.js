const mongoose = require('mongoose')
const Schema = mongoose.Schema

const vacSchema = Schema({
  offer: String,
  salary: String,
  href: String,
  publicDate: String,
  company: String,
  type: String,
  description: String,
  creatorId: {type: Schema.Types.ObjectID, ref: 'employer'},
  status: {type: String, default: 'Local'}
})

module.exports = mongoose.model('vacancy', vacSchema)

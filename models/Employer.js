const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employerSchema = Schema({
  username: {type:String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
  status: {type: String, default: 'employer'},
  createdOffer: [{type: String, ref: 'vacancy'}],
})

module.exports = mongoose.model('employer', employerSchema)

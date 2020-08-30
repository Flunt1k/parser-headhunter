const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = Schema({
  username: {type:String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
  status: {type: String, default: 'employee'},
  cv: {type: Schema.Types.ObjectID, ref: 'cv'},
  wantToWork: [{type: Schema.Types.ObjectID, ref: 'vacancy'}],
})

module.exports = mongoose.model('employee', employeeSchema)

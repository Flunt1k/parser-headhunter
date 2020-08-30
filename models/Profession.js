const mongoose =require('mongoose')

const Schema = mongoose.Schema

const profSchema = Schema({
  name: String
})

module.exports = mongoose.model('profession', profSchema)

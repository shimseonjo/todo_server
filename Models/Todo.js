const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const TodoSchema = new mongoose.Schema({
  task: {type: String},
  done: {type: Boolean, default: false}
},{versionKey: false})

TodoSchema.plugin(AutoIncrement,{inc_field: "id"})

module.exports = mongoose.model("Todo",TodoSchema)
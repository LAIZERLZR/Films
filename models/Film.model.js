const mongoose = require("mongoose")

const FilmsSchema = mongoose.Schema({
  img: String,
  name: String,
  genre: String,
  description: String,
})

const Films = mongoose.model("Films", FilmsSchema)

module.exports = Films

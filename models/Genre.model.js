const mongoose = require("mongoose")

const genreSchema = mongoose.Schema({
  name: String,
  image: String,
  description: String
})

const Genre = mongoose.model("Genre", genreSchema)

module.exports = Genre
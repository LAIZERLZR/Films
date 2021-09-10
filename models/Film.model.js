const mongoose = require("mongoose")

const FilmsSchema = mongoose.Schema({
  img: String,
  name: String,
  description: String,
  price: String,
  rating: String,
  genreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
  },
})

const Films = mongoose.model("Films", FilmsSchema)

module.exports = Films

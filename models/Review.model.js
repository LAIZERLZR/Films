const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
  text: String,
  author: String,

})

const Reviews = mongoose.model("Review", reviewSchema)

module.exports = Reviews

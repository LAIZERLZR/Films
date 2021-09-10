const reviews = require("../models/Review.model")

module.exports.reviewsController = {
  createReview: async (req,res) => {
    try{
      await reviews.create({
        text: req.body.text,
        author: req.body.author,
      })
      res.json("Отзыв успешно добавлен")
    }catch (err){
      console.log(err)
    }
  },
  deleteReview: async (req,res) => {
    try {
      await reviews.findByIdAndDelete(req.params.id)
      res.json("Отзыв успешно удален")
    } catch (err){
      console.log(err)
    }
  },
  updateReview: async (req,res) => {
    try {
      await reviews.findByIdAndUpdate(req.params.id,{
        text: req.body.text,
        author: req.body.author,
      })
      res.json("Отзыв успешно изменен")
    }catch (err){
      console.log(err)
    }
  },
  getReviews: async (req,res) => {
    try {
      const Reviews = await reviews.find()
      res.json(Reviews)
    }catch (err){
      console.log(err)
    }
  }
}
const news = require("../models/News.model")

module.exports.newsController = {
  createNews: async (req,res) => {
    try{
      await news.create({
        title: req.body.title,
        image: req.body.image,
        text: req.body.text
      })
      res.json("Отзыв успешно добавлен")
    }catch (err){
      console.log(err)
    }
  },
  deleteNews: async (req,res) => {
    try {
      await news.findByIdAndDelete(req.params.id)
      res.json("Отзыв успешно удален")
    } catch (err){
      console.log(err)
    }
  },
  updateNews: async (req,res) => {
    try {
      await news.findByIdAndUpdate(req.params.id,{
        title: req.body.title,
        image: req.body.image,
        text: req.body.text
      })
      res.json("Отзыв успешно изменен")
    }catch (err){
      console.log(err)
    }
  },
  getNews: async (req,res) => {
    try {
      const Reviews = await news.find()
      res.json(Reviews)
    }catch (err){
      console.log(err)
    }
  }
}
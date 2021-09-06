const Genre = require('../models/Genre.model')

module.exports.genresController = {
  addGenre: async (req, res) => {
    const { name } = req.body
    try {
      await Genre.create({ name })
      res.json(`Категория ${name} была успешно добавлена`)
    } catch (e) {
      console.log(e)
    }
  },
  getGenres: async (req, res) => {
    try {
      const data = await Genre.find()
      res.json(data)
    } catch (e) {
      console.log(e)
    }
  },
  getGenreById: async (req, res) => {
    try {
      const data = await Genre.findById(req.params.id)
      res.json(data)
    } catch (e) {
      console.log(e)}
  }
  ,
  updateGenre: async (req, res) => {
    const { name } = req.body
    try {
      await Genre.findByIdAndUpdate(req.params.id, { name })
      res.json(`Жанр был изменен`)
    } catch (e) {
      console.log(e)
    }
  },
  deleteGenre: async (req, res) => {
    try {
      await Genre.findByIdAndDelete(req.params.id)
      res.json(`Жанр был удален`)
    } catch (e) {
      console.log(e)
    }
  }
}
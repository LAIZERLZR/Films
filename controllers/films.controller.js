const films = require("../models/Films.model")

module.exports.filmsController = {
  createFilm: async (req, res) => {
    try {
      await films.create({
        films: req.body.films,
        name: req.body.name,
        genre: req.body.genre,
        description: req.body.description
      })
      res.json('Фильм успешно добавлен')
    }catch (err){
      console.log(err)
    }
  },
  deleteFilm: async (req,res) => {
    try {
      await films.findByIdAndDelete(req.params.id)
      res.json('Фильм успешно удален')
    } catch (err){
      console.log(err)
    }
  },
  patchFilm: async (req,res) => {
    try {
      await films.findByIdAndUpdate(req.params.id,{
        films: req.body.films,
        name: req.body.name,
        genre: req.body.genre,
        description: req.body.description
      })
      res.json("Фильм успешно обновлен")
    } catch (err){
      console.log(err)
    }
  },
  getFilms: async (req,res) => {
    try {
      const Films = await films.find()
      res.json(Films)
    }catch (err){
      console.log(err)
    }
  },
  getFilmsById: async (req,res) => {
    try {
      const FilmsById = await films.findById(req.params.id)
      res.json(FilmsById)
    }catch (err){
      console.log(err)
    }
  }
}
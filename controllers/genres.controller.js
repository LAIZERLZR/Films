const genre = require("../models/Genre.model");

module.exports.genresController = {
  addGenre: async (req, res) => {
    try {
      await genre.create({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description
      });
      res.json(`Категория была успешно добавлена`);
    } catch (e) {
      console.log(e);
    }
  },
  getGenres: async (req, res) => {
    try {
      const data = await genre.find();
      res.json(data);
    } catch (e) {
      console.log(e);
    }
  },
  getGenreById: async (req, res) => {
    try {
      const data = await genre.findById(req.params.id);
      res.json(data);
    } catch (e) {
      console.log(e);
    }
  },
  updateGenre: async (req, res) => {
    try {
      await genre.findByIdAndUpdate(req.params.id, {
        name: String,
        image: String,
        description: String
      });
      res.json(`Жанр был изменен`);
    } catch (e) {
      console.log(e);
    }
  },
  deleteGenre: async (req, res) => {
    try {
      await genre.findByIdAndDelete(req.params.id);
      res.json(`Жанр был удален`);
    } catch (e) {
      console.log(e);
    }
  },
};

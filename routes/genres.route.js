const { Router } = require("express")
const { genresController } = require("../controllers/genres.controller")
const router = Router();

router.post("/genres", genresController.addGenre)
router.delete("/genres/:id", genresController.deleteGenre)
router.patch("/genres/:id", genresController.updateGenre)
router.get("/genres", genresController.getGenres)
router.get("/genres/:id", genresController.getGenreById)

module.exports = router;
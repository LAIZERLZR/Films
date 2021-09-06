const {Router} = require("express")
const { filmsController } = require("../controllers/films.controller")
const router = Router();

router.post("/films", filmsController.createFilm)
router.delete("/films/:id", filmsController.deleteFilm)
router.patch("/films/:id", filmsController.patchFilm)
router.get("/films", filmsController.getFilms)
router.get("/films/:id", filmsController.getFilmsById)

module.exports = router;
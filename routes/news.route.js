const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");
const router = Router();

router.post("/news", newsController.createNews);
router.delete("/news/:id", newsController.deleteNews);
router.patch("/news/:id", newsController.updateNews);
router.get("/news", newsController.getNews);

module.exports = router;

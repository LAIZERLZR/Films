const { Router } = require("express")

const { reviewsController } = require("../controllers/reviews.controller")

const router = Router()

router.post("/reviews",reviewsController.createReview)
router.delete("/reviews:id",reviewsController.deleteReview)
router.patch("/reviews",reviewsController.updateReview)
router.get("/reviews",reviewsController.getReviews)

module.exports = router;
const { usersController } = require("../controllers/users.controller")
const { Router } = require("express")

const router = Router()

router.get("/users", usersController.getAllUsers)
router.post("/users", usersController.registerUser)
router.post("/login", usersController.login)
router.patch("users/:id", usersController.editUser)
router.delete("/users/:id", usersController.deleteUser)

module.exports = router
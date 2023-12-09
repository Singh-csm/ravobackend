const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.post("/user", userController.createUser)
router.get("/users", userController.getUser)
router.post("/loginUser", userController.loginUser)
router.post("/verifyOtp", userController.verifyOtp)



module.exports = router
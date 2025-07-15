const { Signup, Login } = require("../../controller/AuthController.js");
const { userVerification } = require("../../middleware/authMiddlewarwe.js");
const router = require("express").Router();

router.post('/', userVerification);
router.post("/signup", Signup);
router.post("/login", Login);


module.exports = router;

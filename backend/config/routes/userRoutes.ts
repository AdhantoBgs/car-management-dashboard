import express from "express";

const router = express.Router();
const controllers = require("../../app/controllers/userControllers");

router.post("/register", controllers.register);
router.post("/login", controllers.login);
router.post("/googleOAuth", controllers.googleOAuth);
router.get("/profile", controllers.authorize, controllers.profile);
router.delete("/remove/:id", controllers.remove);

module.exports = router;
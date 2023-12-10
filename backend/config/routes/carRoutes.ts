import express from "express";

const router = express.Router();
const controllers = require("../../app/controllers/carControllers");
const upload = require("../../config/middleware/upload");

router.get("/", controllers.getCars);
router.get("/:id", controllers.getCarsById);
router.post("/create", upload.single("image_url"), controllers.postCars);
router.put("/update/:id", upload.single("image_url"), controllers.putCars);
router.delete("/delete/:id", controllers.deleteCars);

module.exports = router;
import express from "express";

const router = express.Router();
const controllersCar = require("../controllers/controllersCar");
const upload = require("../middleware/upload");

router.get("/", controllersCar.getCars);
router.get("/:id", controllersCar.getCarsById);
router.post("/create", upload.single("image_url"), controllersCar.postCars);
router.put("/update/:id", upload.single("image_url"), controllersCar.putCars);
router.delete("/delete/:id", controllersCar.deleteCars);

module.exports = router;
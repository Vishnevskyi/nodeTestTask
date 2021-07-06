const express = require("express");
const app = express();
const router = express.Router();
const controller = require("../controller/controller");
router.use("/selectEm",controller.selectEwork);
router.use("/getFilm", controller.getFilm);
router.use("/selectFilm", controller.selectFilm);
router.use("/selectPlanet", controller.selectPlanet);
router.use("/selectVehicle", controller.selectVehicle);
router.use("/selectStarship", controller.selectStarship);
router.use("/selectSpecie", controller.selectSpecie);
app.use(function (err, req, res) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});
module.exports = router;
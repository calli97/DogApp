const { Router } = require("express");
const temperamentControllers = require("../controllers/temperamentControllers");
const temperamentsRouter = Router();

// temperamentControllers.initTemperaments()
temperamentsRouter.get("/", temperamentControllers.getTemperaments);

module.exports = temperamentsRouter;

const routes = require("express").Router();

const { findAll, save, findById } = require("../controllers/teamController");

routes.get("/", findAll);
routes.post("/", save);
routes.get("/:id", findById);

module.exports = routes;

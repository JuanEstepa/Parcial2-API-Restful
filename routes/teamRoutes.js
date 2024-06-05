const routes = require("express").Router();

const { findAll, findById } = require("../controllers/teamController");

routes.get("/", findAll);
routes.get("/:id", findById);

module.exports = routes;

const Team = require("../models/teamModel");

module.exports = {
  findAll: async (req, res) => {
    try {
      const result = await Team.find({});

      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
  save: async (req, res) => {
    try {
      const team = new Team(req.body);

      //TODO. validar que el código no exista, si existe return 201
      const result = await team.save();

      return res.status(201).json({ data: team });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
  findById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Team.findById(id);

      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
};

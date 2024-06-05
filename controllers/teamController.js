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

const Player = require("../models/playerModel");
const Team = require("../models/teamModel");

module.exports = {
  findAll: async (req, res) => {
    try {
      const result = await Player.find({});

      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
  save: async (req, res) => {
    try {
      const player = new Player(req.body);

      //TODO. validar que el código no exista, si existe return 201
      const result = await player.save();

      return res.status(201).json({ data: player });
    } catch (err) {
      return res.status(500).json({ err: err });
    }
  },
  findById: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Player.findById(id);

      return res.status(200).json({ data: result });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, team } = req.body;

      const query = await Player.findById(id);

      if (query) {
        const filter = { _id: id };
        const update = {
          name: name,
          team: team,
        };

        const result = await Player.findByIdAndUpdate(filter, update);

        return res.status(200).json({ data: result });
      } else {
        return res.status(404).json({ msg: "El ObjectId no Existe" });
      }
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
  erase: async (req, res) => {
    const { id } = req.params;
    try {
      const query = await Player.findById(id);

      if (query) {
        const result = await Player.findByIdAndDelete(id);
        console.log("eliminado");
        return res.status(200).json({ msg: "Eliminado con exito" });
      } else {
        return res.status(404).json({ msg: "El ObjectId no Existe" });
      }
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};

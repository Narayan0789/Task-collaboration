const Board = require("../models/Board");

exports.createBoard = async (req, res) => {

  try {

    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title required" });
    }

    const board = new Board({ title });

    await board.save();

    res.status(201).json(board);

  } catch (err) {

    console.error(err);

    res.status(500).json({ error: "Server error" });

  }

};

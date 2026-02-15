const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const Board = require("../models/Board");


// Create Board
router.post("/create", auth, async (req, res) => {

  try {

    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title required" });
    }

    const board = new Board({
      title,
      owner: req.user.id
    });

    await board.save();

    res.json(board);

  } catch (err) {

    console.error(err);

    res.status(500).json({ error: err.message });

  }

});


// Get boards of logged-in user
router.get("/", auth, async (req, res) => {

  try {

    const boards = await Board.find({
      owner: req.user.id
    });

    res.json(boards);

  } catch (err) {

    console.error(err);

    res.status(500).json({ error: err.message });

  }

});

module.exports = router;

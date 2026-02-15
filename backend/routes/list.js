const express = require("express");
const router = express.Router();

const List = require("../models/List");


// Create List
router.post("/create", async (req, res) => {

  try {

    const { title, boardId } = req.body;

    const list = new List({
      title,
      boardId
    });

    await list.save();

    res.json({
      message: "List created successfully",
      list
    });

  } catch(err){
    res.status(500).json({
      error: err.message
    });
  }

});


// Get Lists by Board
router.get("/:boardId", async (req, res) => {

  try {

    const lists = await List.find({
      boardId: req.params.boardId
    });

    res.json(lists);

  } catch(err){
    res.status(500).json({
      error: err.message
    });
  }

});

module.exports = router;

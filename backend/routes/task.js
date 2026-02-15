const express = require("express");
const router = express.Router();

const Task = require("../models/Task");


// Create Task
router.post("/create", async (req, res) => {

  try {

    const { title, description, listId } = req.body;

    const task = new Task({
      title,
      description,
      listId
    });

    await task.save();

    res.json({
      message: "Task created successfully",
      task
    });

  } catch(err){
    res.status(500).json({
      error: err.message
    });
  }

});


// Get Tasks by List
router.get("/:listId", async (req, res) => {

  try {

    const tasks = await Task.find({
      listId: req.params.listId
    });

    res.json(tasks);

  } catch(err){
    res.status(500).json({
      error: err.message
    });
  }

});


// Move Task to another list
router.put("/move", async (req, res) => {

  try {

    const { taskId, newListId } = req.body;

    const task = await Task.findByIdAndUpdate(
      taskId,
      { listId: newListId },
      { new: true }
    );

    res.json({
      message: "Task moved successfully",
      task
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }

});

module.exports = router;

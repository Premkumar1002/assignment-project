const express = require("express");
const router = express.Router();

let tasks = [];
let id = 1;

// GET
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST
router.post("/", (req, res) => {
  const task = {
    id: id++,
    task_name: req.body.task_name,
    status: "Created",
    created_at: new Date()
  };
  tasks.push(task);
  res.json(task);
});

// UPDATE STATUS
router.put("/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (task.status === "Created") task.status = "WIP";
  else if (task.status === "WIP") task.status = "Completed";

  res.json(task);
});

module.exports = router;
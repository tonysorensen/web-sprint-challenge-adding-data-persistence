// build your `/api/tasks` router here
const express = require("express");
const Task = require("./model");

const router = express.Router();

router.get("/tasks", (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => console.log(err)); //the error handler in the server.js will trap this
});
router.post("/tasks", (req, res, next) => {
  Task.createTask(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = router;

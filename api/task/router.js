// build your `/api/tasks` router here
const express = require('express');
const Tasks = require("./model")


const router = express.Router();

router.get("/tasks", (req, res, next) => {
  Tasks.getTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err=>console.log(err)); //the error handler in the server.js will trap this
});

module.exports = router
// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");

const router = express.Router();

router.get("/projects", (req, res, next) => {
  Project.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => console.log(err)); //the error handler in the server.js will trap this
});

router.post("/projects", (req, res, next) => {
  Project.createProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;

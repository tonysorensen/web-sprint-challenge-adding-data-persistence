// build your `/api/projects` router here
const express = require('express');
const Projects = require("./model")


const router = express.Router();

router.get("/projects", (req, res, next) => {
  console.log('getProjects', Projects.getProjects);
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err=>console.log(err)); //the error handler in the server.js will trap this
});

module.exports = router
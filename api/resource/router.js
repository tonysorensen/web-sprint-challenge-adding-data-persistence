// build your `/api/resources` router here
const express = require("express");
const Resource = require("./model");

const router = express.Router();

router.get("/resources", (req, res, next) => {
  Resource.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => console.log(err)); //the error handler in the server.js will trap this
});
router.post("/resources", (req, res, next) => {
  Resource.createResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = router;

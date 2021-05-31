// build your `/api/resources` router here
const express = require('express');
const Resources = require("./model")


const router = express.Router();

router.get("/resources", (req, res, next) => {
  Resources.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err=>console.log(err)); //the error handler in the server.js will trap this
});

module.exports = router
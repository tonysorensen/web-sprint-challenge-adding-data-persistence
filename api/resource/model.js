// build your `Resource` model here
const db = require("../../data/dbConfig.js");

const getResources = () => {
  return db("resources");
};
const createResource = (resource) => {
  return db("resources").insert(resource);
};
module.exports = { getResources, createResource };

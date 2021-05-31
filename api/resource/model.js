// build your `Resource` model here
const db= require("../../data/dbConfig.js")

const getResources = () => {
    return db("resources")
}

module.exports ={getResources}
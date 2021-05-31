// build your `Task` model here
const db= require("../../data/dbConfig.js")

const getTasks = () => {
    return db("tasks")
}

module.exports ={getTasks}
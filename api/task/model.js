// build your `Task` model here
const db= require("../../data/dbConfig.js")

const getTasks = () => {
    return db("tasks")
}
const createTask = (task)=>{
    return db("tasks").insert(task)
}
module.exports ={getTasks,createTask}

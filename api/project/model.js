// build your `Project` model here
const db= require("../../data/dbConfig.js")

const getProjects = () => {
    return db("projects")
}

const createProject = (project)=>{
    return db("projects").insert(project)
}

module.exports ={getProjects, createProject}
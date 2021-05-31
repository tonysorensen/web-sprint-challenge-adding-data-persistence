// build your `Task` model here
const db = require("../../data/dbConfig.js");

const getTasks=()=> {
  return db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.task_id")
    .select("p.project_name", "p.project_description")
    // .where({'p.project_id': p.project_id});
}
async function createTask(task) {
  const [task_id] = await db("tasks").insert(task);
  return getTasks().where({ task_id }).first();
}
module.exports = { getTasks, createTask };

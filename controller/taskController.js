const tasks = require("../model/taskModel");

exports.getAllTasksController = async (req, res) => {
    const {status,sort}=req.query
  try {
    let filter={}
    if(status=="completed"){
        filter.completed=true;
    }
    else if(status=="pending"){
        filter.completed=false
    }
    const sortOption= sort== "asc" ? 1 : -1
    const Alltasks = await tasks.find(filter).sort({createdAt:sortOption});
    res.status(200).json(Alltasks);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.addTaskController = async (req, res) => {
  const { title, completed } = req.body;
  try {
    const existingTask = await tasks.findOne({ title });
    if (existingTask) {
      res.status(406).json("task already exists");
    } else {
      const task = new tasks({
        title,
        completed,
      });
      await task.save();
      res.status(200).json("task added successfully");
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteTaskController = async (req, res) => {
  const { task_id } = req.params;
  try {
    await tasks.findByIdAndDelete(task_id);
    res.status(200).json("task deleted Successfully");
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateTaskController = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {

    const existingTask=await tasks.findByIdAndUpdate(id,{
        title,
        completed
    },{new:true})
    res.status(200).json('task updated successfully')

  } catch (err) {
    res.status(400).json(err);
  }
};

// RESTful API: Create a RESTful API to handle task operations.
// ○ GET /api/tasks: Get all tasks.
// ○ POST /api/tasks: Create a new task.
// ○ PUT /api/tasks/:id: Update an existing task (e.g., toggle completion, update title).
// ○ DELETE /api/tasks/:id: Delete a task.

const tasks = require("../model/taskModel");

// get tasks / All / filter / sort

exports.getAllTasksController = async (req, res) => {
  const { status, sort } = req.query;
  try {
    let filter = {};
    if (status == "completed") {
      filter.completed = true;
    } else if (status == "pending") {
      filter.completed = false;
    }
    const sortOption = sort == "asc" ? 1 : -1;
    const Alltasks = await tasks.find(filter).sort({ createdAt: sortOption });
    res.status(200).json({
      message: "Fetched Tasks Successfully",
      count: Alltasks.length,
      tasks: Alltasks,
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to Fetch Tasks",
      error: err.message,
    });
  }
};

// add task

exports.addTaskController = async (req, res) => {
  const { title, completed } = req.body;
  try {
    const existingTask = await tasks.findOne({ title });
    if (existingTask) {
      res.status(406).json({ message: "Task Already Exists" });
    } else {
      const task = new tasks({
        title,
        completed,
      });
      await task.save();
      res.status(200).json({
        message: "Task Added Successfully",
        newTask: task,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Failed to Add Task",
      error: err.message,
    });
  }
};

// delete task

exports.deleteTaskController = async (req, res) => {
  const { id } = req.params;
  try {
    await tasks.findByIdAndDelete(id);
    res.status(200).json({
      message: "Task Deleted Successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to Delete Task",
      error: err.message,
    });
  }
};

// update task / toggle /title

exports.updateTaskController = async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedTask = await tasks.findByIdAndUpdate(
      id,
      {
        title,
        completed,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Task Updated Successfully",
      updatedTask,
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to Update Task",
      error: err.message,
    });
  }
};

const  express=require('express')

const router=express.Router()


const taskController=require('../controller/taskController')

router.post('/api/tasks',taskController.addTaskController)

router.get('/api/tasks',taskController.getAllTasksController)

router.delete('/api/tasks/:id',taskController.deleteTaskController)

router.put('/api/tasks/:id',taskController.updateTaskController)


module.exports=router


// RESTful API: Create a RESTful API to handle task operations.
// ○ GET /api/tasks: Get all tasks.
// ○ POST /api/tasks: Create a new task.
// ○ PUT /api/tasks/:id: Update an existing task (e.g., toggle completion, update title).
// ○ DELETE /api/tasks/:id: Delete a task.
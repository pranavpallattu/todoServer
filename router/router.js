const  express=require('express')

const router=express.Router()

const taskController=require('../controller/taskController')

// add tasks

router.post('/api/tasks',taskController.addTaskController)

// get All tasks / filter / sort

router.get('/api/tasks',taskController.getAllTasksController)

// delete task

router.delete('/api/tasks/:id',taskController.deleteTaskController)

// update task / toggle / title

router.put('/api/tasks/:id',taskController.updateTaskController)

module.exports=router

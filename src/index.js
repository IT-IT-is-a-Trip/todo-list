import { TaskManager } from "./taskManager";
import { Project } from "./project";
const taskStorage = []

const newTaskManager = new TaskManager(taskStorage)

// newTaskManager.addNewTask('Create', 'remember', '05.06.2025', 'high')
// newTaskManager.addNewTask('Remove', 'remember', '05.06.2025', 'high')
// newTaskManager.getTasks()
// newTaskManager.removeTask('Create')
// newTaskManager.getTasks()
const newProject = new Project(newTaskManager)

newProject.taskManager.addNewTask('Create', 'remember', '05.06.2025', 'high')
newProject.taskManager.addNewTask('Remove', 'remember', '05.06.2025', 'high')
newProject.taskManager.addNewTask('Allah akbar', 'praise', '12.12.2222', 'high')
newProject.taskManager.removeTask('Allah akbar')
newProject.taskManager.renameTask('Remove', 'Oh Yeah!')
newProject.taskManager.changeDescription('Oh Yeah!', 'blah blah blaaah...')
newProject.taskManager.changeDate('Create', '01.01.2049')
newProject.taskManager.changePriority('Create', 'low')
newProject.getTasks()
console.log(newProject)
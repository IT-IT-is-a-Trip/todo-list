import { TaskManager } from "./taskManager";

const taskStorage = []

const newTaskManager = new TaskManager(taskStorage)

newTaskManager.addNewTask('Create', 'remember', '05.06.2025', 'high')
newTaskManager.getTasks()

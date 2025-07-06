import { AddNewTask } from "./addTask";
import { deleteTask } from "./removeTask";


export class TaskManager {
    constructor(taskStorage) {
        this.taskStorage = taskStorage
    }
    getTasks() {
        console.log(this.taskStorage)
    }
    addNewTask(name, description, dueDate, priority) {
        this.taskStorage.push(new AddNewTask(name, description, dueDate, priority))
    }
    removeTask(name) {
        deleteTask(name, this.taskStorage)
    }
}
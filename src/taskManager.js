import { NewTask } from "./addTask";
import { deleteTask } from "./removeTask";


export class TaskManager {
    constructor(taskStorage) {
        this.taskStorage = taskStorage
    }
    getTasks() {
        return console.log(this.taskStorage)
    }
    addNewTask(name, description, dueDate, priority) {
        this.taskStorage.push(new NewTask(name, description, dueDate, priority))
    }
    removeTask(name) {
        deleteTask(name, this.taskStorage)
    }
    renameTask(name, newName) {
        const taskIndex = this.taskStorage.findIndex(task => task.name === name);
        this.taskStorage[taskIndex].name = newName
    }
    changeDescription(name, newDescription) {
        const taskIndex = this.taskStorage.findIndex(task => task.name === name);
        this.taskStorage[taskIndex].description = newDescription
    }
    changeDate(name, newDate) {
        const taskIndex = this.taskStorage.findIndex(task => task.name === name);
        this.taskStorage[taskIndex].dueDate = newDate
    }
    changePriority(name, newPriority) {
        const taskIndex = this.taskStorage.findIndex(task => task.name === name);
        this.taskStorage[taskIndex].priority = newPriority
    }
}
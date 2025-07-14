import { TaskManager } from "./taskManager"

export class Project {
    constructor(taskManager) {
        this.taskManager = taskManager
    }
    getTasks() {
        console.log(this.taskManager.getTasks())
    }
}
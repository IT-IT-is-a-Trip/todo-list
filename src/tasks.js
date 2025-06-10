export class Tasks {
    tasks = []

    addTask(taskName, description) {
        if (!this.tasks[taskName]) return
        this.tasks.push(taskName)
        this.tasks[taskName].description = description
    }
    removeTask(taskName) {
        if (!this.tasks[taskName]) return
        this.tasks[taskName] = []
    }
    getTask(taskName) {
        console.log(this.tasks[taskName].description)
    }
}

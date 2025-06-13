export class Tasks {
    tasks = []

    addTask(taskName, description = '') {
        // if (this.tasks[taskName]) return
        const task = {
            taskName: taskName,
            description: description
        }
        this.tasks.push(task)
    }
    removeTask(taskName) {
        if (!this.tasks[taskName]) return
        this.tasks[taskName] = []
    }
    getTask(taskName) {
        this.tasks.forEach((task) => {
            if (task.taskName == taskName) {console.log(task)}
    })
    }
}

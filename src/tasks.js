
export class AddNewTask {
    constructor(name, description, dueDate, priority) {
        this.name = (new AddTaskName(name)).getName()
        this.description = (new AddDescription(description)).getDescription()
        this.dueDate = (new AddDueDate(dueDate)).getDueDate()
        this.priority = (new AddPriority(priority)).getPriority()
    }
}

export class AddTaskName {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

export class AddDescription {
    constructor(description) {
        this.description = description
    }
    getDescription() {
        return this.description
    }
}

export class AddDueDate {
    constructor(dueDate) {
        this.dueDate = dueDate
    }
    getDueDate() {
        return this.dueDate
    }
}

export class AddPriority {
    constructor(priority) {
        this.priority = priority
    }
    getPriority() {
        return this.priority
    }
}

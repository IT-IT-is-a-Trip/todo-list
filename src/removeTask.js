 export const deleteTask = function(taskName, taskStorage) {
    const taskToDelete = taskStorage.findIndex(task => task.name === taskName)
    taskStorage.splice(taskToDelete, 1)
}
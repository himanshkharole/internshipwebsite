function addTask() {
    let task = document.getElementById("task").value;
    if (task !== "") {
        let now = new Date();
        let formattedDate = now.toLocaleDateString();
        let formattedTime = now.toLocaleTimeString();
        let taskWithTime = `${task} (${formattedDate} at ${formattedTime})`;
        tasks.push(taskWithTime);
        showPendingTasks();
        document.getElementById("task").value = "";
    }
}

function completeTask(index) {
    let task = tasks.splice(index, 1);
    let now = new Date();
    let formattedDate = now.toLocaleDateString();
    let formattedTime = now.toLocaleTimeString();
    let taskWithTime = `${task} (${formattedDate} at ${formattedTime})`;
    completedTasks.push(taskWithTime);
    showPendingTasks();
    showCompletedTasks
}
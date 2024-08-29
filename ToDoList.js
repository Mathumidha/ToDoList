// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
}

// Add event listener to the Add button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Add task when the Enter key is pressed
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a task
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        // Add event listener to delete button
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        // Add event listener to mark task as complete
        li.addEventListener('click', function() {
            li.classList.toggle('task-completed');
        });

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    } else {
        alert("Please enter a task.");
    }
});

// Optional: Allow pressing Enter to add a task
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTaskButton.click();
    }
});

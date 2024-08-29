// script.js

document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('new-task').value;

    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a delete button for the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
    };

    //update
    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.className = 'update-btn';
    updateBtn.onclick = function() {
        const newTaskText = prompt("Update the task:", taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            li.firstChild.textContent = newTaskText;
        }
    };

    // Add the delete button to the list item
    li.appendChild(deleteBtn);
    //add update
    li.appendChild(updateBtn);

    // Add the list item to the task list
    document.getElementById('task-list').appendChild(li);

    // Clear the input field
    document.getElementById('new-task').value = '';
}

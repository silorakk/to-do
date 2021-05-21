// Variables

var itemIds = 0;

// SELECTORS
const todoButton = document.querySelector('.todo-button');
const inputTask = document.querySelector('.input-task');
const list = document.querySelector('.todo-list');
const completeBtn = document.querySelector('.complete-btn');

// Event Listeners
todoButton.addEventListener("click", addToDo);
inputTask.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) {
        addToDo();
    }

});

list.addEventListener("click", deleteCheck);



// Functions
function addToDo() {
    var value = inputTask.value;

    if(value === "") {
        alert("A task can't be blank, please enter a valid input.")
    } else {
        // Create a div to hold the to-do task
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        todoDiv.id = itemIds;

        
        // Create a new list element for the task
        const newTask = document.createElement("li");
        newTask.innerHTML = value;
        newTask.classList.add("todo-item");
        todoDiv.appendChild(newTask);
        
        // Create a button element to allow the user to mark a task as complete
        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = '<i class="fa fa-check"></i>';
        completeBtn.classList.add('complete-btn');
        todoDiv.append(completeBtn);
        // Create a button element to allow the user to remove the task
        const removeBtn = document.createElement("button");
        removeBtn.classList.add('remove-btn');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        todoDiv.appendChild(removeBtn);
        
        // Clear out the value in the search box
        inputTask.value = "";


        // Append to list
        list.append(todoDiv);

        // Increment itemIDs variable
        itemIds++;

    }

}

// Check whether the user is trying to delete a task or complete it
function deleteCheck(e) {
    const task = e.target;
    const todo = task.parentElement;
    if (task.classList[0] === 'remove-btn' || task.classList[0] === 'fa fa-trash') {
        todo.remove();
    } else {
        todo.classList.add('complete');
    }

}

function completeTask(e) {
    const task = e.target;
    const toDo = task.parentElement;
    toDo.parentElement.classList.add('complete');
}




var element = document.body;
let tasks = [];
let numTasks = 0; 
const textarea = document.getElementById('task-textarea');

textarea.addEventListener('input', () => {
    textarea.scrollLeft = textarea.scrollWidth;
});

textarea.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
});

function addTask(button) {
    const task = textarea.value.trim();
    tasks[numTasks] = task;
    numTasks++;

    const section = document.createElement('section');
    section.className = 'this-task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'check';
    checkbox.onclick = function() {
        crossOut(this);
    };

    const spaceContainer = document.createElement('div');
    spaceContainer.className = 'space-between';

    const taskName = document.createElement('p');
    taskName.id = 'task-name';
    taskName.textContent = task;

    const trashIcon = document.createElement('img');
    trashIcon.src = 'images/trash.jpg';
    trashIcon.id = 'trash';
    trashIcon.onclick = function () {
        removeTask(this);
    };

    spaceContainer.appendChild(taskName);
    spaceContainer.appendChild(trashIcon);
    section.appendChild(checkbox);
    section.appendChild(spaceContainer);

    const main = document.querySelector('main');
    main.appendChild(section);

    textarea.value = "";

}

function removeTask(trashIcon) {
    const task = trashIcon.closest('.this-task');
    const taskName = task.querySelector('#task-name').textContent;
    const index = tasks.indexOf(taskName);
    
    for(let i = index; i < numTasks - 1; i++) {
        tasks[i] = tasks[i + 1];
    }
    numTasks--;
    
    task.remove();
}

function crossOut(checkbox) {
    const taskName = checkbox.nextElementSibling.querySelector('#task-name');
    if(checkbox.checked) {
        taskName.style.textDecoration = 'line-through';
        taskName.style.color = 'grey';
    }

    else {
        taskName.style.textDecoration = 'none';
        taskName.style.color = 'black';
    }
}


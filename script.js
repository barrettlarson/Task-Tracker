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

function addTask() {
    const task = textarea.value.trim();
    if (!task) return;

    const section = document.createElement('section');
    section.className = 'this-task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'check';
    checkbox.onclick = () => crossOut(checkbox);

    const spaceContainer = document.createElement('div');
    spaceContainer.className = 'space-between';

    const taskName = document.createElement('textarea');
    taskName.id = 'task-name';
    taskName.textContent = task;
    taskName.rows = '1';

    const trashIcon = document.createElement('img');
    trashIcon.src = 'images/trash.jpg';
    trashIcon.id = 'trash';
    trashIcon.onclick = () => removeTask(trashIcon);

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
    task.remove();
}

function crossOut(checkbox) {
    const taskName = checkbox.nextElementSibling.querySelector('#task-name');
    if (checkbox.checked) {
        taskName.style.textDecoration = 'line-through';
        taskName.style.color = 'grey';
    } else {
        taskName.style.textDecoration = 'none';
    }
}

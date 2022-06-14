import './styles/normalize.css';
import './styles/style.css';

import { RenderElements } from './renderElements';
import { createTodo } from './create-todo';

// Tasks

const tasks = [];

function addTaskToProject(e) {
  e.preventDefault();
  const title = document.querySelector('.input-title');
  const description = document.querySelector('.input-description');
  const priority = document.querySelector('.select-priority');
  const dueDate = document.querySelector('.input-due-date');

  if (!title.value) {
    title.style.borderColor = '#DC3545';
    return;
  }

  const task = createTodo(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
  );
  tasks.push(task);

  RenderElements.createTask(task);

  RenderElements.clearNewTasksInputs(title, description, priority, dueDate);
  RenderElements.hideAddTaskModal();
}

const addTaskBtns = document.querySelectorAll('.add-task');
addTaskBtns.forEach((addTaskBtn) => {
  addTaskBtn.addEventListener('click', RenderElements.showAddTaskModal);
});

const createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', addTaskToProject);

// dropdown maenu

const projectButton = document.querySelector('.projects-btn-container');
const showProjectsList = () => {
  const projectsContainer = document.querySelector('.projects-container');
  projectsContainer.classList.toggle('show-projects-list');
};

projectButton.addEventListener('click', showProjectsList);

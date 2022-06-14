import { format } from 'date-fns';

// import { createTaskModal } from "./createTaskModal";
const taskModal = document.querySelector('.task-modal');
const RenderElements = (() => {
  const taskList = document.querySelector('.task-list');

  const showAddTaskModal = () => {
    taskModal.style.display = 'block';
  };
  const hideAddTaskModal = () => {
    taskModal.style.display = 'none';
  };

  const clearNewTasksInputs = (title, description, priority, dueDate) => {
    title.value = '';
    description.value = '';
    priority.value = '';
    dueDate.value = '';
  };

  function createTask(task) {
    const { title, description, priority, dueDate } = task;

    if (!title) return;

    let date = dueDate;
    if (!date) {
      const today = new Date();
      const [month, day, year] = [
        today.getMonth(),
        today.getDate(),
        today.getFullYear(),
      ];
      date = `${year}-${month + 1}-${day}`;
    }

    const formattedDate = format(new Date(date), 'EEEE, MMM dd');

    const template = document.querySelector('#template-li');
    const taskElement = document.importNode(template.content, true);
    const li = taskElement.querySelector('.task-item');
    const titleElement = taskElement.querySelector('.todo-title');
    const descriptionElement = taskElement.querySelector('.todo-description');
    const dueDateElement = taskElement.querySelector('.due-date');

    titleElement.textContent = title;
    descriptionElement.textContent = description;
    dueDateElement.textContent = formattedDate;

    if (priority === 'Medium') {
      li.classList.add('medium-prio');
    } else if (priority === 'Low') {
      li.classList.add('low-prio');
    } else {
      li.classList.add('high-prio');
    }

    taskList.appendChild(taskElement);
  }

  return {
    showAddTaskModal,
    hideAddTaskModal,
    clearNewTasksInputs,
    createTask,
  };
})();

export { RenderElements };

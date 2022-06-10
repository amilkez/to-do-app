import "./styles/normalize.css";
import "./styles/style.css";

import { RenderElements } from "./renderElements";
import { createTodo } from "./create-todo";

// Tasks

const tasks = [];

// console.log(newTodo);
const addTaskBtns = document.querySelectorAll(".add-task");
addTaskBtns.forEach((addTaskBtn) => {
	addTaskBtn.addEventListener("click", RenderElements.showAddTaskModal);
});

const createTaskBtn = document.querySelector(".create-task-btn");
createTaskBtn.addEventListener("click", addTaskToProject);

function addTaskToProject(e) {
	e.preventDefault();
	const title = document.querySelector(".input-title");
	const description = document.querySelector(".input-description");
	const priority = document.querySelector(".select-priority");
	const dueDate = document.querySelector(".input-due-date");
	tasks.push(
		createTodo(title.value, description.value, priority.value, dueDate.value)
	);
	tasks.forEach((task) => {
		RenderElements.createTask(task);
	});
	RenderElements.clearNewTasksInputs(title, description, priority, dueDate);
	RenderElements.hideAddTaskModal();
}

// const newTodo = createTodo("title", "lorem ipsum", "high", "22", true);

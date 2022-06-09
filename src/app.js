import "./styles/normalize.css";
import "./styles/style.css";

import { RenderElements } from "./renderElements";
import { createTaskModal } from "./createTaskModal";

// console.log(newTodo);
const addTaskBtns = document.querySelectorAll(".add-task");
addTaskBtns.forEach((addTaskBtn) => {
	addTaskBtn.addEventListener("click", RenderElements.showAddTaskModal);
});

const createTaskBtn = document.querySelector(".create-task-btn");
createTaskBtn.addEventListener("click", addTaskToProject);

function addTaskToProject(e) {
	e.preventDefault();
	const title = document.querySelector(".input-title").value;
	const description = document.querySelector(".input-description").value;
	const priority = document.querySelector(".select-priority").value;
	const dueDate = document.querySelector(".input-due-date").value;

	RenderElements.hideAddTaskModal();
	console.log({ title, description, priority, dueDate });
}

import { createTodo } from "./create-todo";
// import { createTaskModal } from "./createTaskModal";
const taskModal = document.querySelector(".task-modal");
const RenderElements = (() => {
	const taskList = document.querySelector(".task-list");

	const showAddTaskModal = () => {
		taskModal.style.display = "block";
	};
	const hideAddTaskModal = () => {
		taskModal.style.display = "none";
	};

	return { showAddTaskModal, hideAddTaskModal };
})();

export { RenderElements };

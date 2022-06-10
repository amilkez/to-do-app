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

	const clearNewTasksInputs = (title, description, priority, dueDate) => {
		title.value = "";
		description.value = "";
		priority.value = "";
		dueDate.value = "";
	};

	function createTask(task) {
		const template = document.querySelector("#template-li");
		const taskElement = document.importNode(template.content, true);
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

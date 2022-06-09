// const createTaskModal = () => {
// 	const taskModal = document.createElement("div");
// 	taskModal.classList.add("task-modal");
// 	const createTaskHeader = document.createElement("h3");
// 	createTaskHeader.textContent = "Create a New Task";
// 	const form = document.createElement("form");
// 	form.classList.add("task-form");

// 	const labelTitle = document.createElement("label");
// 	labelTitle.classList.add("label", "label-title");
// 	labelTitle.textContent = "Title:";
// 	const inputTitle = document.createElement("input");
// 	inputTitle.classList.add("input-title", "input");
// 	inputTitle.setAttribute("type", "text");

// 	const labelDescription = document.createElement("label");
// 	labelDescription.classList.add("label", "label-description");
// 	labelDescription.textContent = "Description:";
// 	const inputDescription = document.createElement("input");
// 	inputDescription.classList.add("input", "input-description");
// 	inputDescription.setAttribute("type", "text");

// 	const labelPriority = document.createElement("label");
// 	labelPriority.classList.add("label", "label-priority");
// 	labelPriority.setAttribute("for", "priority");
// 	labelPriority.textContent = "Select the priority Level: ";
// 	const selectPriority = document.createElement("select");
// 	selectPriority.classList.add("select-priority");
// 	selectPriority.setAttribute("name", "priority");
// 	selectPriority.setAttribute("id", "priority");
// 	const optionHigh = document.createElement("option");
// 	optionHigh.value = "High";
// 	optionHigh.textContent = "High";
// 	const optionMedium = document.createElement("option");
// 	optionMedium.value = "Medium";
// 	optionMedium.textContent = "Medium";
// 	const optionLow = document.createElement("option");
// 	optionLow.value = "Low";
// 	optionLow.textContent = "Low";
// 	selectPriority.append(optionHigh, optionMedium, optionLow);

// 	const labelDueDate = document.createElement("label");
// 	labelDueDate.classList.add("label", "label-due-date");
// 	labelDueDate.textContent = "Select a due date:";
// 	const inputDueDate = document.createElement("input");
// 	inputDueDate.classList.add("input", "input-due-date");
// 	inputDueDate.setAttribute("type", "date");

// 	const addTaskBtn = document.createElement("button");
// 	addTaskBtn.classList.add("btn", "create-task-btn");
// 	addTaskBtn.textContent = "Create Task";

// 	form.append(
// 		labelTitle,
// 		inputTitle,
// 		labelDescription,
// 		inputDescription,
// 		labelPriority,
// 		selectPriority,
// 		labelDueDate,
// 		inputDueDate,
// 		addTaskBtn
// 	);

// 	taskModal.append(createTaskHeader, form);

// 	return taskModal;
// };

// export { createTaskModal };

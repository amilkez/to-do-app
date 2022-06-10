// Factory func that creates a todo object

const createTodo = (
	title,
	description,
	dueDate,
	priority = "high",
	isCompleted = false
) => {
	return { title, description, dueDate, priority, isCompleted };
};

export { createTodo };

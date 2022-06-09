// Factory func that creates a todo object

const createTodo = (
	title,
	description,
	dueDate,
	priority,
	isCompleted = false
) => {
	return { title, description, dueDate, priority, isCompleted };
};

const newTodo = createTodo("title", "lorem ipsum", "high", "22", true);

export { createTodo };

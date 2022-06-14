// Factory func that creates a todo object

const createTodo = (
  title,
  description,
  dueDate,
  priority = 'high',
  isCompleted = false,
) => ({
  title,
  description,
  dueDate,
  priority,
  isCompleted,
});

// eslint-disable-next-line import/prefer-default-export
export { createTodo };

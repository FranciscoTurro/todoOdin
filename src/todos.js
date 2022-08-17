const Todo = (description, dueDate, checked, project) => {
  return {
    description,
    dueDate,
    checked,
    project,
  };
};

const todos = [];

export { Todo, todos };

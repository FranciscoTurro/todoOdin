const Todo = (description, dueDate, checked, project) => {
  return {
    description,
    dueDate,
    checked,
    project,
  };
};

const changeCheckedTodo = (number) => {
  if (todos[number].checked == true) {
    todos[number].checked = false;
  } else {
    todos[number].checked = true;
  }
};

const todos = [];

export { Todo, todos, changeCheckedTodo };

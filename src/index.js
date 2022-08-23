import { changeCheckedTodo, Todo, todos } from './todos';
import 'nes.css/css/nes.min.css';
import './styles.css';

const newTodo = document.getElementById('newTodo');
const desc = document.getElementById('description');
const date = document.getElementById('date');
const project = document.getElementById('project');
const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');
const datalist = document.getElementById('datalist');

let buttonFlag = false;

const drawTodo = () => {
  for (let i = 0; i < todos.length; i += 1) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');

    const checkboxDiv = document.createElement('input');
    checkboxDiv.setAttribute('type', 'checkbox');
    checkboxDiv.setAttribute('id', i);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = todos[i].description;
    const dateDiv = document.createElement('div');
    dateDiv.textContent = todos[i].dueDate;

    if (todos[i].checked === true) {
      todoDiv.classList.add('checked');
      checkboxDiv.checked = true;
    }

    const info = document.createElement('div');
    info.classList.add('infoDiv');
    todoDiv.appendChild(checkboxDiv);
    info.appendChild(descriptionDiv);
    info.appendChild(dateDiv);
    todoDiv.appendChild(info);
    content.appendChild(todoDiv);

    checkboxDiv.addEventListener('click', (e) => {
      changeCheckedTodo(parseInt(e.target.id, 10));
      e.target.parentNode.classList.toggle('checked');
    });
  }
};

const drawTodoOne = (todo) => {
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todoDiv');
  const checkboxDiv = document.createElement('input');
  checkboxDiv.setAttribute('type', 'checkbox');
  checkboxDiv.classList.add(todos.indexOf(todo, 0));
  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = todo.description;
  const dateDiv = document.createElement('div');
  dateDiv.textContent = todo.dueDate;

  if (todo.checked === true) {
    todoDiv.classList.add('checked');
    checkboxDiv.checked = true;
  }

  const info = document.createElement('div');
  info.classList.add('infoDiv');
  todoDiv.appendChild(checkboxDiv);
  info.appendChild(descriptionDiv);
  info.appendChild(dateDiv);
  todoDiv.appendChild(info);
  content.appendChild(todoDiv);

  checkboxDiv.addEventListener('click', (e) => {
    changeCheckedTodo(parseInt(e.target.classList, 10));
    e.target.parentNode.classList.toggle('checked');
  });
};

const drawProjects = (projectP) => {
  todos.forEach((element) => {
    if (element.project === projectP) {
      drawTodoOne(element);
    }
  });
};

const names = [];
const projectsCreator = (projectp) => {
  if (projectp === '') {
    return;
  }
  if (names.find((e) => e === projectp)) {
    return;
  }
  {
    if (buttonFlag === false) {
      buttonFlag = true;
      const all = document.createElement('button');
      all.classList.add('allTodo', 'nes-btn', 'is-warning');
      all.textContent = 'All to dos';
      sidebar.appendChild(all);
      all.addEventListener('click', () => {
        content.innerHTML = '';
        drawTodo();
      });
    }

    names.push(projectp);
    const button = document.createElement('button');
    button.classList.add('projBtn', 'nes-btn', 'is-success');
    button.textContent = projectp;
    sidebar.appendChild(button);
    button.addEventListener('click', () => {
      content.innerHTML = '';
      drawProjects(button.textContent);
    });
  }
};

const datalistCompletion = () => {
  datalist.innerHTML = '';
  names.forEach((item) => {
    const option = document.createElement('option');
    option.value = item;
    datalist.appendChild(option);
  });
};

newTodo.addEventListener('click', () => {
  if (desc.value.length !== 0 && date.value.length !== 0) {
    content.innerHTML = '';
    todos.push(Todo(desc.value, date.value, false, project.value));
    drawTodo();
    projectsCreator(project.value);
    datalistCompletion();
    desc.value = '';
    date.value = '';
    project.value = '';
  } else {
    alert('A to-do must have a description and a date');
  }
});

const modalContainer = document.getElementById('modalContainer');
const modalButton = document.querySelector('.modalButton');

modalButton.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

window.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});

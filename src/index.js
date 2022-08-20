import { changeCheckedTodo, Todo, todos } from "./todos.js";

const newTodo = document.querySelector(".newTodo");
const debug = document.querySelector(".debug");
const desc = document.getElementById("description");
const date = document.getElementById("date");
const project = document.getElementById("project");
const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");
const datalist = document.getElementById("datalist");

newTodo.addEventListener("click", () => {
  content.innerHTML = "";
  todos.push(Todo(desc.value, date.value, false, project.value));
  drawTodo();
  projectsCreator(project.value);
  datalistCompletion();
  description.value = "";
  date.value = "";
  project.value = "";
});

debug.addEventListener("click", () => {
  todos.forEach((element) => {
    console.log(element);
  });
});

const drawTodo = () => {
  for (let i = 0; i < todos.length; i++) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");
    const checkboxDiv = document.createElement("input");
    checkboxDiv.setAttribute("type", "checkbox");
    checkboxDiv.classList.add(i);
    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = todos[i].description;
    const dateDiv = document.createElement("div");
    dateDiv.textContent = todos[i].dueDate;

    todoDiv.appendChild(checkboxDiv);
    todoDiv.appendChild(descriptionDiv);
    todoDiv.appendChild(dateDiv);
    content.appendChild(todoDiv);

    checkboxDiv.addEventListener("click", (e) => {
      changeCheckedTodo(parseInt(e.target.classList));
      e.target.parentNode.classList.toggle("checked");
    });
  }
};

const names = [];
const projectsCreator = (project) => {
  if (project == "") {
    return;
  }
  if (names.find((e) => e === project)) {
    return;
  } else {
    names.push(project);
    const button = document.createElement("button");
    button.classList.add("projBtn");
    button.textContent = project;
    sidebar.appendChild(button);
    button.addEventListener("click", () => {
      content.innerHTML = "";
      projectTest(button.textContent);
    });
  }
};

const datalistCompletion = () => {
  datalist.innerHTML = "";
  names.forEach(function (item) {
    var option = document.createElement("option");
    option.value = item;
    datalist.appendChild(option);
  });
};

const projectTest = (project) => {
  todos.forEach((element) => {
    if (element.project == project) {
      drawTodoOne(element);
    } else {
      return;
    }
  });
};

const drawTodoOne = (todo) => {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");
  const checkboxDiv = document.createElement("input");
  checkboxDiv.setAttribute("type", "checkbox");
  checkboxDiv.classList.add();
  const descriptionDiv = document.createElement("div");
  descriptionDiv.textContent = todo.description;
  const dateDiv = document.createElement("div");
  dateDiv.textContent = todo.dueDate;

  todoDiv.appendChild(checkboxDiv);
  todoDiv.appendChild(descriptionDiv);
  todoDiv.appendChild(dateDiv);
  content.appendChild(todoDiv);

  checkboxDiv.addEventListener("click", (e) => {
    changeCheckedTodo(parseInt(e.target.classList));
    e.target.parentNode.classList.toggle("checked");
  });
};

const modalContainer = document.getElementById("modalContainer");
const modalButton = document.querySelector(".modalButton");

modalButton.addEventListener("click", () => {
  modalContainer.style.display = "block"; //makes the modal appear
});

window.addEventListener("click", (e) => {
  if (e.target == modalContainer) {
    modalContainer.style.display = "none"; //makes the modal dissappear if i click outside of it
  }
});

import { changeCheckedTodo, Todo, todos } from "./todos.js";

const newTodo = document.querySelector(".newTodo");
const desc = document.getElementById("description");
const date = document.getElementById("date");
const project = document.getElementById("project");
const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");
const datalist = document.getElementById("datalist");
const allTodo = document.querySelector(".allTodo");
const debug = document.getElementById("debug");

debug.addEventListener("click", () => {
  todos.forEach((element) => {
    console.log(element);
  });
});

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

allTodo.addEventListener("click", () => {
  content.innerHTML = "";
  drawTodo();
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
    if (todos[i].checked == true) {
      todoDiv.classList.add("checked");
      checkboxDiv.checked = true;
    }

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
      drawProjects(button.textContent);
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

const drawProjects = (project) => {
  todos.forEach((element) => {
    if (element.project == project) {
      drawTodoOne(element);
    } else {
      return;
    }
  });
};

const drawTodoOne = (todo) => {
  //cuando estoy en un proyecto no puedo checkear todos, es porque no tienen la clase con el numero de su posicion en el array asi que no puedo identificarlos
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");
  const checkboxDiv = document.createElement("input");
  checkboxDiv.setAttribute("type", "checkbox");
  const descriptionDiv = document.createElement("div");
  descriptionDiv.textContent = todo.description;
  const dateDiv = document.createElement("div");
  dateDiv.textContent = todo.dueDate;
  if (todo.checked == true) {
    todoDiv.classList.add("checked");
    checkboxDiv.checked = true;
  }

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

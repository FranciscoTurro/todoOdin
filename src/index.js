import { changeCheckedTodo, Todo, todos } from "./todos.js";
import "nes.css/css/nes.min.css";
import "./styles.css";

const newTodo = document.querySelector(".newTodo");
const desc = document.getElementById("description");
const date = document.getElementById("date");
const project = document.getElementById("project");
const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");
const datalist = document.getElementById("datalist");

let buttonFlag = false;

newTodo.addEventListener("click", () => {
  if (description.value.length != 0 && date.value.length != 0) {
    content.innerHTML = "";
    todos.push(Todo(desc.value, date.value, false, project.value));
    drawTodo();
    projectsCreator(project.value);
    datalistCompletion();
    description.value = "";
    date.value = "";
    project.value = "";
  } else {
    alert("A to do needs a description and a date");
    return;
  }
});

const drawTodo = () => {
  for (let i = 0; i < todos.length; i++) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoDiv");

    const checkboxDiv = document.createElement("input");
    checkboxDiv.setAttribute("type", "checkbox");
    checkboxDiv.setAttribute("id", i);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = todos[i].description;
    const dateDiv = document.createElement("div");
    dateDiv.textContent = todos[i].dueDate;

    if (todos[i].checked == true) {
      todoDiv.classList.add("checked");
      checkboxDiv.checked = true;
    }

    const info = document.createElement("div");
    info.classList.add("infoDiv");
    todoDiv.appendChild(checkboxDiv);
    info.appendChild(descriptionDiv);
    info.appendChild(dateDiv);
    todoDiv.appendChild(info);
    content.appendChild(todoDiv);

    checkboxDiv.addEventListener("click", (e) => {
      changeCheckedTodo(parseInt(e.target.id));
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
    if (buttonFlag == false) {
      buttonFlag = true;
      const all = document.createElement("button");
      all.classList.add("allTodo", "nes-btn", "is-warning");
      all.textContent = "All to dos";
      sidebar.appendChild(all);
      all.addEventListener("click", () => {
        content.innerHTML = "";
        drawTodo();
      });
    }

    names.push(project);
    const button = document.createElement("button");
    button.classList.add("projBtn", "nes-btn", "is-success");
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
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");
  const checkboxDiv = document.createElement("input");
  checkboxDiv.setAttribute("type", "checkbox");
  checkboxDiv.classList.add(todos.indexOf(todo, 0));
  const descriptionDiv = document.createElement("div");
  descriptionDiv.textContent = todo.description;
  const dateDiv = document.createElement("div");
  dateDiv.textContent = todo.dueDate;

  if (todo.checked == true) {
    todoDiv.classList.add("checked");
    checkboxDiv.checked = true;
  }

  const info = document.createElement("div");
  info.classList.add("infoDiv");
  todoDiv.appendChild(checkboxDiv);
  info.appendChild(descriptionDiv);
  info.appendChild(dateDiv);
  todoDiv.appendChild(info);
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

import { changeCheckedTodo, Todo, todos } from "./todos.js";
import * as modal from "./modal";

const newTodo = document.querySelector(".newTodo");
const debug = document.querySelector(".debug");
const desc = document.getElementById("description");
const date = document.getElementById("date");
const project = document.getElementById("project");
const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");
const datalist = document.getElementById("datalist");

newTodo.addEventListener("click", () => {
  todos.push(Todo(desc.value, date.value, false, project.value));
  drawTodo(desc.value, date.value);
  projectsCreator(project.value);
  datalistCompletion();
});

debug.addEventListener("click", () => {
  todos.forEach((element) => {
    console.log(element);
  });
});

let i = 0;
const drawTodo = (desc, date) => {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");
  const checkboxDiv = document.createElement("input");
  checkboxDiv.setAttribute("type", "checkbox");
  checkboxDiv.classList.add(i);
  const descriptionDiv = document.createElement("div");
  descriptionDiv.textContent = desc;
  const dateDiv = document.createElement("div");
  dateDiv.textContent = date;

  todoDiv.appendChild(checkboxDiv);
  todoDiv.appendChild(descriptionDiv);
  todoDiv.appendChild(dateDiv);

  content.appendChild(todoDiv);

  checkboxDiv.addEventListener("click", (e) => {
    changeCheckedTodo(parseInt(e.target.classList));
    console.log(todos[parseInt(e.target.classList)]);
  });
  i++;
};

const names = [];
const projectsCreator = (project) => {
  if (project == "") {
    return;
  }
  //idea is good but fuck off idk
  if (names.find((e) => e === project)) {
    return;
  } else {
    names.push(project);
    const button = document.createElement("button");
    button.textContent = project;
    sidebar.appendChild(button);
  }
};

const datalistCompletion = () => {
  names.forEach(function (item) {
    var option = document.createElement("option");
    option.value = item;
    datalist.appendChild(option);
  });
};

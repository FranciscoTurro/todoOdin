import { Todo, todos } from "./todos.js";
import * as modal from "./modal";
let today = new Date().toISOString().slice(0, 10);

const test = document.querySelector(".test");
const desc = document.getElementById("description");
const date = document.getElementById("date");
const project = document.getElementById("project");
const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");
const datalist = document.getElementById("datalist");

test.addEventListener("click", () => {
  todos.push(Todo(desc.value, date.value, false, project.value));
  showarrayinconsole();
  drawTodo(desc.value, date.value);
  projectsCreator(project.value);
  datalistCompletion();
});

const showarrayinconsole = () => {
  todos.forEach((element) => {
    console.log(element);
  });
};

const drawTodo = (desc, date) => {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todoDiv");
  const checkboxDiv = document.createElement("input");
  checkboxDiv.setAttribute("type", "checkbox");
  const descriptionDiv = document.createElement("div");
  descriptionDiv.textContent = desc;
  const dateDiv = document.createElement("div");
  dateDiv.textContent = date;

  todoDiv.appendChild(checkboxDiv);
  todoDiv.appendChild(descriptionDiv);
  todoDiv.appendChild(dateDiv);

  content.appendChild(todoDiv);
};

const names = [];
const projectsCreator = (project) => {
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

import { Todo, todos } from "./todos.js";
import * as modal from "./modal";
let today = new Date().toISOString().slice(0, 10);

const test = document.querySelector(".test");
const desc = document.getElementById("description");
const date = document.getElementById("date");
const project = document.getElementById("project");
const content = document.getElementById("content");

test.addEventListener("click", () => {
  todos.push(Todo(desc.value, date.value, false, project.value));
  showarrayinconsole();
  drawTodo(desc.value, date.value);
  projectsCreator(project.value);
});
//puedo hacer un array que se llame nombres, guarda los nombres de todos los projectos. foreach if element == nombre o element == nombre con la primera letra uppercase entonces hacemos algo
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

const projectsCreator = (project) => {
  //idea is good but fuck off idk
  const names = [];

  const isFound = names.some((element) => {
    if (element == project) {
      return true;
    }
    return false;
  });

  if (isFound == false) {
    names.push(project);
    const button = document.createElement("button");
    button.textContent = project;
    content.appendChild(button);
  }
  if (isFound == true) {
    alert(2);
    return;
  }
};

import { Todo } from "./todos.js";
let today = new Date().toISOString().slice(0, 10); //puedo hacer un foreach en el array, si un todo.dueDate = today lo pongo en la seccion de today. no se como se hace el tema de que sea en la semana igual

const test = document.querySelector(".test");
const name = document.getElementById("title");
const desc = document.getElementById("description");
const date = document.getElementById("date");
const project = document.getElementById("project");

const todos = [];

test.addEventListener("click", () => {
  todos.push(Todo(name.value, desc.value, date.value, false, project.value));
  asd();
});
//if 2 todos have the same project name i put them in a new array with the project name. need to draw the todos in the screen
function asd() {
  todos.forEach((i) => {
    console.log(i);
  });
}

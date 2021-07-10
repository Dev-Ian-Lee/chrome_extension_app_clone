const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  addToDo(newToDo);
  saveToDos();
}

function addToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;

  const button = document.createElement("button");
  button.innerText = "img/close.png";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentNode;
  li.remove();
}

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

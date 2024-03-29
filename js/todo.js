const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "toDos";

let toDos = [];

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  newToDoObject = { text: newToDo, id: Date.now() };
  toDos.push(newToDoObject);
  paintToDo(newToDoObject);
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const button = document.createElement("button");
  button.innerText = "✘";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentNode;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

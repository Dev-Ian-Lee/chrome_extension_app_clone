const loginForm = document.querySelector("#login_form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const quote_container = document.querySelector("#quote");
const weather = document.querySelector("#weather");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `Hello, ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  setVisible();
}

function setVisible() {
  clock.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  quote_container.classList.remove(HIDDEN_CLASSNAME);
  weather.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // 사용자 이름 저장되어 있을 경우
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  clock.classList.add(HIDDEN_CLASSNAME);
  toDoForm.classList.add(HIDDEN_CLASSNAME);
  toDoList.classList.add(HIDDEN_CLASSNAME);
  quote_container.classList.add(HIDDEN_CLASSNAME);
  weather.classList.add(HIDDEN_CLASSNAME);
} else {
  // 저장되어 있지 않을 경우
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUserName);
  setVisible();
}

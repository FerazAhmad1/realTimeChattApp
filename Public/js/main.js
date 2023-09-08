"use-strict";
const socket = io();
const formContainer = document.querySelector("#chat-form");
const input = document.querySelector("#msg");
console.log(formContainer);
formContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});
socket.on("chat message", (msg) => {
  console.log(msg);
});

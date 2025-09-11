const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

function addTodoItem(text) {
  if (!todoList) return;
  const li = document.createElement("li");
  li.textContent = text;
  li.dataset.id = Date.now().toString();
  todoList.appendChild(li);
}

if (input) {
  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && input.value.trim() !== "") {
      addTodoItem(input.value.trim());
      input.value = "";
    }
  });
}

if (todoList) {
  todoList.addEventListener("click", (event) => {
    const target = event.target;
    const li = target.closest("li");

    if (li) {
      console.log("ID cliccato:", li.dataset.id);
    }
  });
}

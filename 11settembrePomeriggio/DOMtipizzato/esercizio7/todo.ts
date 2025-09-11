const input = document.querySelector<HTMLInputElement>("#todo-input");
const todoList = document.querySelector<HTMLUListElement>("#todo-list");

// Aggiunge alla lista un nuovo item con id e testo
export function addTodoItem(text: string) {
  if (!todoList) return;
  const li = document.createElement("li");
  li.textContent = text;
  // Aggiungo dataset.id univoco semplice con timestamp
  li.dataset.id = Date.now().toString();
  todoList.appendChild(li);
}

if (input) {
  input.addEventListener("keyup", (event: KeyboardEvent) => {
    if (event.key === "Enter" && input.value.trim() !== "") {
      addTodoItem(input.value.trim());
      input.value = "";
    }
  });
}

if (todoList) {
  todoList.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const li = target.closest("li") as HTMLLIElement | null;

    if (li) {
      console.log("ID cliccato:", li.dataset.id);
    }
  });
}

export  const input = document.querySelector<HTMLInputElement>("#todo-input");

if (input) {
  input.addEventListener("keyup", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(input.value);
    }
  });
} else {
  console.error("Input non trovato");
}

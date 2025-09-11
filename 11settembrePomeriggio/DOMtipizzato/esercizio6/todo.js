var input = document.querySelector("#todo-input");
if (input) {
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            console.log(input.value);
        }
    });
}
else {
    console.error("Input non trovato");
}

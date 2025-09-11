function getById(arr, id) {
    return arr.find(function (item) { return item.id === id; });
}
// Test con array di oggetti con proprietà id
var items = [
    { id: "abc", nome: "Oggetto A" },
    { id: "def", nome: "Oggetto B" },
    { id: "ghi", nome: "Oggetto C" }
];
var trovato = getById(items, "def");
console.log(trovato);

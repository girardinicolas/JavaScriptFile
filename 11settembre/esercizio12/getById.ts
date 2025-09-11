export function getById<T extends { id: string }>(arr: T[], id: string): T | undefined {
    return arr.find(item => item.id === id);
}

// Test con array di oggetti con proprietà id
const items = [
    { id: "abc", nome: "Oggetto A" },
    { id: "def", nome: "Oggetto B" },
    { id: "ghi", nome: "Oggetto C" }
];

const trovato = getById(items, "def");
console.log(trovato);

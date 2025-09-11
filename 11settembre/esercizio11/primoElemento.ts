export function primoElemento<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[0] : undefined;
}

// Test con array di stringhe
const stringhe = ["uno", "due", "tre"];
console.log(primoElemento(stringhe)); // Output: "uno"

// Test con array di numeri
const numeri = [10, 20, 30];
console.log(primoElemento(numeri)); // Output: 10

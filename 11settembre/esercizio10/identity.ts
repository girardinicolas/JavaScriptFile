export function identity<T>(value: T): T {
    return value;
}

// Test con stringhe
const stringa = identity<string>("Ciao mondo");
console.log(stringa);

// Test con numeri
const numero = identity<number>(42);
console.log(numero);

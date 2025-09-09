function somma(...numeri) {
    return numeri.reduce((acc, numero) => acc + numero, 0);
}

console.log(somma(2, 3, 5)); // 10

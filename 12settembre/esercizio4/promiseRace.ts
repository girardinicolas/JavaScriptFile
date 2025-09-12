function op1(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Risultato op1 (3s)"), 3000));
}

function op2(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Risultato op2 (1s)"), 1000));
}

function op3(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve("Risultato op3 (2s)"), 2000));
}

// Promise.all: aspetta tutte le operazioni
Promise.all([op1(), op2(), op3()]).then(results => {
    console.log("Promise.all risultati:", results);
});

// Promise.race: aspetta la prima operazione finita
Promise.race([op1(), op2(), op3()]).then(firstResult => {
    console.log("Promise.race primo risultato:", firstResult);
});

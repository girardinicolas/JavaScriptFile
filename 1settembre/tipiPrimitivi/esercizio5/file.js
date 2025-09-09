const sum = 0.1 + 0.2;
console.log("0.1 + 0.2 =", sum);  // Stampa 0.30000000000000004

const message = `
In JavaScript, a causa della precisione limitata dei numeri in virgola mobile,
0.1 + 0.2 non è esattamente 0.3 ma ${sum}.
Questo succede perché numeri come 0.1 e 0.2 non possono essere rappresentati esattamente in binario, 
quindi si verifica un piccolo errore di arrotondamento.
`;
console.log(message);

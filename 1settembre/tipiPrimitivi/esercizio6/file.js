const valori = [0, '', '0', [], {}];

valori.forEach(valore => {
    console.log(`Boolean(${JSON.stringify(valore)}) =`, Boolean(valore));
});

// Boolean(0) => false perché 0 è un valore "falsy" in JavaScript.

// Boolean('') => false perché la stringa vuota è "falsy".

// Boolean('0') => true perché una stringa non vuota è sempre "truthy", anche se contiene "0".

// Boolean([]) => true perché un array (anche vuoto) è un oggetto e in JavaScript tutti gli oggetti sono "truthy".

// Boolean({}) => true perché un oggetto vuoto è "truthy".
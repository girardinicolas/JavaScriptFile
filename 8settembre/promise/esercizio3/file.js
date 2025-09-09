const promiseNumeroCasuale = new Promise((resolve) => {
    const numero = Math.floor(Math.random() * 10) + 1;
    resolve(numero);
  });
  
  promiseNumeroCasuale
    .then((numero) => {
      console.log('Numero generato:', numero);
      return numero * numero;
    })
    .then((quadrato) => {
      console.log('Quadrato del numero:', quadrato);
    });
  
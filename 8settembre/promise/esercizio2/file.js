function checkNumber(num) {
    return new Promise((resolve, reject) => {
      if (num % 2 === 0) {
        resolve('Numero pari');
      } else {
        reject(new Error('Numero dispari'));
      }
    });
  }
  
  // Test con numero pari
  checkNumber(4)
    .then(messaggio => console.log(messaggio))
    .catch(errore => console.error(errore.message));
  
  // Test con numero dispari
  checkNumber(5)
    .then(messaggio => console.log(messaggio))
    .catch(errore => console.error(errore.message));
  
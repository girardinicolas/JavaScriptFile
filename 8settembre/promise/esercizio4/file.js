const operazione1 = new Promise((resolve) => {
    setTimeout(() => resolve('Risultato operazione 1'), 3000);
  });
  
  const operazione2 = new Promise((resolve) => {
    setTimeout(() => resolve('Risultato operazione 2'), 2000);
  });
  
  const operazione3 = new Promise((resolve) => {
    setTimeout(() => resolve('Risultato operazione 3'), 1000);
  });
  
  Promise.all([operazione1, operazione2, operazione3])
    .then((risultati) => {
      console.log('Risultati in ordine:', risultati);
    })
    .catch((errore) => {
      console.error('Errore in una delle operazioni:', errore);
    });
  
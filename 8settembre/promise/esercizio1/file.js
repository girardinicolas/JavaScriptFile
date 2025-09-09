const promessa = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Operazione completata');
    }, 2000);
  });
  
  promessa.then(messaggio => {
    console.log(messaggio);
  });
  
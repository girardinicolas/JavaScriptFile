function fetchUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Utente non trovato');
        }
        return response.json();
      })
      .then(user => {
        console.log('Nome utente:', user.name);
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  
  // Esempio di chiamata:
  fetchUser(1);  // Cambiare id per testare diversi utenti
  
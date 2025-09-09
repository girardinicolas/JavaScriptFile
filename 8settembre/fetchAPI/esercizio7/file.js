function createPost(title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Risposta dal server:', data);
    })
    .catch(error => {
      console.error('Errore nella richiesta POST:', error);
    });
  }
  
  // Esempio di uso
  createPost('Titolo di esempio', 'Questo è il corpo del post di esempio');
  
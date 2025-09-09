const ul = document.getElementById('todo-list');

fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  })
  .then(todos => {
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.textContent = todo.title;
      ul.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Errore nel caricamento dei todo:', error);
    ul.textContent = 'Impossibile caricare la lista dei todo.';
  });

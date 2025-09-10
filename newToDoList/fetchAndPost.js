import { animeStorage } from './storage.js';
import { renderList, updateCounters } from './ui.js';

export async function fetchTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    if (!response.ok) throw new Error('Errore nel caricamento dei todos');
    const todos = await response.json();

    todos.forEach(todo => {
      if (!animeStorage.findByName(todo.title)) {
        animeStorage.add({
          name: todo.title,
          description: 'Todo importato',
          image: '',
          toWatch: false,
          ongoing: false,
          seen: false,
          addedDate: new Date()
        });
      }
    });

    updateCounters();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

export async function addFakePost() {
  const postData = { title: 'Titolo fake', body: 'Descrizione fake', userId: 1 };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(postData)
    });

    if (!response.ok) throw new Error('Errore durante la richiesta POST');

    const data = await response.json();

    animeStorage.add({
      name: data.title,
      description: data.body,
      image: '',
      toWatch: false,
      ongoing: false,
      seen: false,
      addedDate: new Date()
    });

    renderList();
    updateCounters();

  } catch (error) {
    console.error('Errore nella funzione addFakePost:', error);
  }
}

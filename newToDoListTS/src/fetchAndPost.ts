import { Anime } from './anime.js';
import { animeStorage } from './storage.js';
import { renderList, updateCounters } from './ui.js';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Funzione fetch API JSONPlaceholder per prendere 5 todos e aggiungerli come anime
export async function fetchTodos(): Promise<void> {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    if (!response.ok) throw new Error('Errore nel caricamento dei todos');

    const todos: Todo[] = await response.json();

    // Per ogni todo, se non esiste già per nome, crea Anime e aggiunge allo storage
    todos.forEach(todo => {
      if (!animeStorage.findByName(todo.title)) {
        const newAnime = new Anime(
          todo.title,
          'Todo importato',
          '', // immagine vuota / default
          false,
          false,
          false
        );
        animeStorage.add(newAnime);
      }
    });

    // Aggiorna UI e contatori con i nuovi dati
    renderList();
    updateCounters();
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// Funzione simulata per POST verso JSONPlaceholder e aggiunta risultato come nuovo anime
export async function addFakePost(): Promise<void> {
  const postData = { title: 'Titolo fake', body: 'Descrizione fake', userId: 1 };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });

    if (!response.ok) throw new Error('Errore durante la richiesta POST');

    const data = await response.json();

    // Crea nuovo anime dai dati post e lo aggiunge allo storage
    const newAnime = new Anime(data.title, data.body, '', false, false, false);
    animeStorage.add(newAnime);

    // Aggiorna UI e contatori
    renderList();
    updateCounters();
  } catch (error) {
    console.error('Errore nella funzione addFakePost:', error);
  }
}

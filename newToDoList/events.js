import { addAnime, changeFilter, changeSort } from './main.js';
import { switchToArray, switchToMap } from './storageSwitcher.js';
import { renderList, updateCounters } from './ui.js';
import { fetchTodos } from './fetchAndPost.js';

// Inizializza gli event listener e avvia il caricamento iniziale dati
export function setupEventListeners() {
  document.addEventListener('DOMContentLoaded', () => {
    // Pulsante aggiungi anime
    document.getElementById('addAnimeBtn').addEventListener('click', addAnime);

    // Pulsanti cambiamento storage (Array o Map)
    document.getElementById('btnArrayStorage').addEventListener('click', switchToArray);
    document.getElementById('btnMapStorage').addEventListener('click', switchToMap);

    // Selettori filtro e ordinamento
    document.getElementById('filterSelect').addEventListener('change', e => changeFilter(e.target.value));
    document.getElementById('sortSelect').addEventListener('change', e => changeSort(e.target.value));

    // Fetch iniziale tutti i todos da JSONPlaceholder
    fetchTodos();

    // Renderizza la lista e aggiorna contatori
    renderList();
    updateCounters();
  });
}

setupEventListeners();

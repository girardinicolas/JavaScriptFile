import { addAnime, changeFilter, changeSort } from './main.js';
import { switchToArray, switchToMap } from './storageSwitcher.js';
import { renderList, updateCounters } from './ui.js';
import { fetchTodos } from './fetchAndPost.js';
// Inizializza gli event listener e avvia il caricamento iniziale dati
export function setupEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        // Pulsante aggiungi anime
        const addBtn = document.getElementById('addAnimeBtn');
        addBtn?.addEventListener('click', addAnime);
        // Pulsanti cambiamento storage (Array o Map)
        const btnArray = document.getElementById('btnArrayStorage');
        btnArray?.addEventListener('click', switchToArray);
        const btnMap = document.getElementById('btnMapStorage');
        btnMap?.addEventListener('click', switchToMap);
        // Selettori filtro e ordinamento
        const filterSelect = document.getElementById('filterSelect');
        filterSelect?.addEventListener('change', e => {
            const target = e.target;
            changeFilter(target.value);
        });
        const sortSelect = document.getElementById('sortSelect');
        sortSelect?.addEventListener('change', e => {
            const target = e.target;
            changeSort(target.value);
        });
        // Fetch iniziale tutti i todos da JSONPlaceholder
        fetchTodos();
        // Renderizza la lista e aggiorna contatori
        renderList();
        updateCounters();
    });
}
setupEventListeners();

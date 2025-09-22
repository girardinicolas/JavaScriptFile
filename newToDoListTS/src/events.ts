import { addAnime, changeFilter, changeSort } from './main.js';
import { switchToArray, switchToMap } from './storageSwitcher.js';
import { renderList, updateCounters } from './ui.js';
import { fetchTodos } from './fetchAndPost.js';

type FilterType = 'all' | 'toWatch' | 'ongoing' | 'seen';
type SortType = 'asc' | 'desc';

// Inizializza gli event listener e avvia il caricamento iniziale dati
export function setupEventListeners(): void {
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
 const filterSelect = document.getElementById('filterSelect') as HTMLSelectElement | null;
 filterSelect?.addEventListener('change', e => {
 const target = e.target as HTMLSelectElement;
 changeFilter(target.value as FilterType);
 });

 const sortSelect = document.getElementById('sortSelect') as HTMLSelectElement | null;
 sortSelect?.addEventListener('change', e => {
 const target = e.target as HTMLSelectElement;
 changeSort(target.value as SortType);
 });

 // Fetch iniziale tutti i todos da JSONPlaceholder
 fetchTodos();

 // Renderizza la lista e aggiorna contatori
 renderList();
 updateCounters();
 });
}

setupEventListeners();

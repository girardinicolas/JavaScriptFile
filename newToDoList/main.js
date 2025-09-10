import { animeStorage } from './storage.js';
import { setupEventListeners } from './events.js';
import { renderList, updateCounters, showAnimeAddedPopup } from './ui.js';

export let currentFilter = 'all';
export let currentSortOrder = 'desc';

export async function addAnime() {
  const inputName = document.getElementById('newAnimeInput');
  const inputDesc = document.getElementById('newAnimeDesc');
  const inputImage = document.getElementById('newAnimeImage');

  const name = inputName.value.trim();
  const description = inputDesc.value.trim();
  const image = inputImage.value.trim();

  if (!name) {
    alert('Per favore, inserisci un nome di anime.');
    return;
  }
  if (animeStorage.findByName(name)) {
    alert('Anime già presente.');
    return;
  }

  animeStorage.add({
    name,
    description,
    image,
    toWatch: false,
    ongoing: false,
    seen: false,
    addedDate: new Date()
  });

  inputName.value = '';
  inputDesc.value = '';
  inputImage.value = '';

  renderList();
  updateCounters();

  await showAnimeAddedPopup();
}

export function removeAnime(index) {
  animeStorage.remove(index);
  renderList();
  updateCounters();
}

export function updateStatus(index, status, checked) {
  const allAnimes = animeStorage.getAll();

  if (status === 'seen' && checked) {
    allAnimes[index].seen = true;
    allAnimes[index].toWatch = false;
    allAnimes[index].ongoing = false;
  } else if ((status === 'toWatch' || status === 'ongoing') && checked) {
    allAnimes[index][status] = true;
    allAnimes[index].seen = false;
  } else {
    allAnimes[index][status] = checked;
  }

  animeStorage.update(index, allAnimes[index]);
  renderList();
  updateCounters();
}

export function onFilterChange(event) {
  currentFilter = event.target.value;
  renderList();
}

export function onSortChange(event) {
  currentSortOrder = event.target.value;
  renderList();
}

setupEventListeners();

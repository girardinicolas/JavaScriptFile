import { animeStorage } from './storage.js';
import { removeAnime, updateStatus } from './main.js';
import { currentFilter, currentSortOrder } from './main.js';  // importa qui le variabili reactive

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function showAnimeAddedPopup() {
  const popup = document.getElementById('animeAddedPopup');
  try {
    await sleep(4000);
    popup.style.display = 'block';
    await sleep(3000);
    popup.style.display = 'none';
  } catch (error) {
    console.error('Errore nel popup:', error);
    popup.style.display = 'none';
  }
}

export function toggleDisplay(element, shouldShow) {
  element.style.display = shouldShow ? 'block' : 'none';
}

export function filterAndSortList() {
  let filtered = animeStorage.getAll();

  if (currentFilter === 'toWatch') filtered = filtered.filter(a => a.toWatch);
  else if (currentFilter === 'ongoing') filtered = filtered.filter(a => a.ongoing);
  else if (currentFilter === 'seen') filtered = filtered.filter(a => a.seen);

  filtered.sort((a, b) => currentSortOrder === 'asc' ? a.addedDate - b.addedDate : b.addedDate - a.addedDate);

  return filtered;
}

export function renderList() {
  const toWatchSection = document.querySelector('#toWatchContainer').parentElement;
  const ongoingSection = document.querySelector('#ongoingContainer').parentElement;
  const seenSection = document.querySelector('#seenContainer').parentElement;

  toggleDisplay(toWatchSection, false);
  toggleDisplay(ongoingSection, false);
  toggleDisplay(seenSection, false);

  if (currentFilter === 'all') {
    toggleDisplay(toWatchSection, true);
    toggleDisplay(ongoingSection, true);
    toggleDisplay(seenSection, true);
  } else if (currentFilter === 'toWatch') toggleDisplay(toWatchSection, true);
  else if (currentFilter === 'ongoing') toggleDisplay(ongoingSection, true);
  else if (currentFilter === 'seen') toggleDisplay(seenSection, true);

  document.getElementById('toWatchContainer').innerHTML = '';
  document.getElementById('ongoingContainer').innerHTML = '';
  document.getElementById('seenContainer').innerHTML = '';

  const filteredList = filterAndSortList();

  filteredList.forEach((anime, index) => {
    const card = document.createElement('div');
    card.className = 'anime-card';

    const img = document.createElement('img');
    img.src = anime.image || 'https://via.placeholder.com/250x350?text=No+Image';
    img.alt = anime.name;
    card.appendChild(img);

    const toggleArrow = document.createElement('span');
    toggleArrow.className = 'toggle-desc';
    toggleArrow.textContent = '▶';
    card.appendChild(toggleArrow);

    const title = document.createElement('h3');
    title.textContent = anime.name;
    card.appendChild(title);

    const desc = document.createElement('p');
    desc.className = 'description';
    desc.textContent = anime.description || 'Nessuna descrizione disponibile.';
    card.appendChild(desc);

    toggleArrow.onclick = () => {
      const isVisible = desc.style.display === 'block';
      desc.style.display = isVisible ? 'none' : 'block';
      toggleArrow.classList.toggle('expanded', !isVisible);
    };

    const cbToWatch = document.createElement('input');
    cbToWatch.type = 'checkbox';
    cbToWatch.checked = anime.toWatch;
    cbToWatch.id = `toWatch${index}`;
    cbToWatch.onchange = e => updateStatus(index, 'toWatch', e.target.checked);

    const labelToWatch = document.createElement('label');
    labelToWatch.textContent = 'Da vedere';
    labelToWatch.htmlFor = `toWatch${index}`;

    const cbOngoing = document.createElement('input');
    cbOngoing.type = 'checkbox';
    cbOngoing.checked = anime.ongoing;
    cbOngoing.id = `ongoing${index}`;
    cbOngoing.onchange = e => updateStatus(index, 'ongoing', e.target.checked);

    const labelOngoing = document.createElement('label');
    labelOngoing.textContent = 'In corso';
    labelOngoing.htmlFor = `ongoing${index}`;

    const cbSeen = document.createElement('input');
    cbSeen.type = 'checkbox';
    cbSeen.checked = anime.seen;
    cbSeen.id = `seen${index}`;
    cbSeen.onchange = e => updateStatus(index, 'seen', e.target.checked);

    const labelSeen = document.createElement('label');
    labelSeen.textContent = 'Visto';
    labelSeen.htmlFor = `seen${index}`;

    card.appendChild(cbToWatch);
    card.appendChild(labelToWatch);
    card.appendChild(cbOngoing);
    card.appendChild(labelOngoing);
    card.appendChild(cbSeen);
    card.appendChild(labelSeen);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Rimuovi';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => removeAnime(index);
    card.appendChild(removeBtn);

    if (anime.seen) {
      document.getElementById('seenContainer').appendChild(card);
    } else if (anime.ongoing) {
      document.getElementById('ongoingContainer').appendChild(card);
    } else {
      document.getElementById('toWatchContainer').appendChild(card);
    }
  });

  updateCounters();
}

export function updateCounters() {
  let toWatchCount = 0, ongoingCount = 0, seenCount = 0;
  animeStorage.getAll().forEach(anime => {
    if (anime.toWatch) toWatchCount++;
    if (anime.ongoing) ongoingCount++;
    if (anime.seen) seenCount++;
  });

  document.getElementById('toWatchCount').textContent = toWatchCount;
  document.getElementById('ongoingCount').textContent = ongoingCount;
  document.getElementById('seenCount').textContent = seenCount;
}

// --- MODULO DI STORAGE ---

class AnimeStorageArray {
  constructor() {
    this.list = [];
  }

  add(item) {
    this.list.push(item);
  }

  remove(index) {
    this.list.splice(index, 1);
  }

  update(index, newData) {
    this.list[index] = { ...this.list[index], ...newData };
  }

  findByName(name) {
    return this.list.find(a => a.name.toLowerCase() === name.toLowerCase());
  }

  getAll() {
    return this.list;
  }

  size() {
    return this.list.length;
  }
}

class AnimeStorageMap {
  constructor() {
    this.map = new Map();
  }

  add(item) {
    this.map.set(item.name.toLowerCase(), item);
  }

  remove(indexOrName) {
    if (typeof indexOrName === 'number') {
      const keys = Array.from(this.map.keys());
      if (indexOrName >= 0 && indexOrName < keys.length) {
        this.map.delete(keys[indexOrName]);
      }
    } else {
      this.map.delete(indexOrName.toLowerCase());
    }
  }

  update(indexOrName, newData) {
    let key;
    if (typeof indexOrName === 'number') {
      key = Array.from(this.map.keys())[indexOrName];
    } else {
      key = indexOrName.toLowerCase();
    }
    if (key && this.map.has(key)) {
      const current = this.map.get(key);
      this.map.set(key, { ...current, ...newData });
    }
  }

  findByName(name) {
    return this.map.get(name.toLowerCase());
  }

  getAll() {
    return Array.from(this.map.values());
  }

  size() {
    return this.map.size;
  }
}

// --- INIZIALIZZAZIONE STORAGE (default Array) ---
let animeStorage = new AnimeStorageArray();

// --- FUNZIONI PER SWITCHARE STORAGE ---

function switchToMap() {
  const newStorage = new AnimeStorageMap();
  animeStorage.getAll().forEach(item => newStorage.add(item));
  animeStorage = newStorage;
  renderList();
  updateCounters();
  alert('Storage impostato su Map');
}

function switchToArray() {
  const newStorage = new AnimeStorageArray();
  animeStorage.getAll().forEach(item => newStorage.add(item));
  animeStorage = newStorage;
  renderList();
  updateCounters();
  alert('Storage impostato su Array');
}

// --- COLLEGAMENTO PULSANTI SWITCH STORAGE E BOTTONI PERSONALIZZATI ---
document.addEventListener('DOMContentLoaded', async () => {
  await fetchTodos();
  renderList();

  const btnArray = document.getElementById('btnArrayStorage');
  const btnMap = document.getElementById('btnMapStorage');
  const btnAddFakePost = document.getElementById('btnAddFakePost');

  if (btnArray && btnMap) {
    btnArray.onclick = switchToArray;
    btnMap.onclick = switchToMap;
  }

  if (btnAddFakePost) {
    btnAddFakePost.addEventListener('click', addFakePost);
  }
});

// --- FUNZIONE DI SLEEP ---
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// --- FUNZIONE POPUP ASINCRONA CON GESTIONE ERRORI ---
async function showAnimeAddedPopup() {
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

// --- FUNZIONE FETCH TODOS e importazione come anime ---
async function fetchTodos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    if (!response.ok) throw new Error('Errore nel caricamento dei todos');
    const todos = await response.json();
    console.log('Todos caricati:', todos);

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

// --- FUNZIONE POST FALSO PER AGGIUNTA ANIME ---
async function addFakePost() {
  const postData = {
    title: 'Titolo fake',
    body: 'Descrizione fake',
    userId: 1
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(postData)
    });

    if (!response.ok) throw new Error('Errore durante la richiesta POST');

    const data = await response.json();
    console.log('Post creato:', data);

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

// --- FUNZIONI PRINCIPALI ---

async function addAnime() {
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

  const addedDate = new Date();

  animeStorage.add({
    name,
    description,
    image,
    toWatch: false,
    ongoing: false,
    seen: false,
    addedDate
  });

  inputName.value = '';
  inputDesc.value = '';
  inputImage.value = '';

  renderList();
  updateCounters();

  await showAnimeAddedPopup();
}

function removeAnime(index) {
  animeStorage.remove(index);
  renderList();
  updateCounters();
}

function updateStatus(index, status, checked) {
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

let currentFilter = 'all';
let currentSortOrder = 'desc';

function toggleDisplay(element, shouldShow) {
  element.style.display = shouldShow ? 'block' : 'none';
}

function filterAndSortList() {
  let filtered = animeStorage.getAll();

  if (currentFilter === 'toWatch') filtered = filtered.filter(a => a.toWatch);
  else if (currentFilter === 'ongoing') filtered = filtered.filter(a => a.ongoing);
  else if (currentFilter === 'seen') filtered = filtered.filter(a => a.seen);

  filtered.sort((a, b) => currentSortOrder === 'asc' ? a.addedDate - b.addedDate : b.addedDate - a.addedDate);

  return filtered;
}

function renderList() {
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

function updateCounters() {
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

function onFilterChange() {
  const select = document.getElementById('filterSelect');
  currentFilter = select.value;
  renderList();
}

function onSortChange() {
  const select = document.getElementById('sortSelect');
  currentSortOrder = select.value;
  renderList();
}

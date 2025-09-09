const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });

const fetchComments = fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => {
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });

Promise.race([fetchPosts, fetchComments])
  .then(data => {
    console.log('Risposta arrivata per prima:', data);
  })
  .catch(err => {
    console.error('Errore nella fetch:', err);
  });

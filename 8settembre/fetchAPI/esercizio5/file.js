fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    })
    .then(posts => {
        // Stampa in console i titoli dei primi 5 post
        posts.slice(0, 5).forEach(post => {
            console.log(post.title);
        });
    })
    .catch(err => {
        console.error('Errore durante il fetch:', err);
    });

async function fetchUserData() {
    try {
        // Prima richiesta GET per ottenere i dati dell'utente con id=1
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await userResponse.json();

        // Prendere l'id per la seconda fetch
        const userId = user.id;

        // Seconda richiesta GET per prendere i post con userId=1
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await postsResponse.json();

        // Stampare nome utente e titoli dei post
        console.log(`Nome utente: ${user.name}`);
        console.log('Titoli dei post:');
        posts.forEach(post => console.log(`- ${post.title}`));

    } catch (error) {
        console.error('Errore durante il fetch:', error);
    }
}

fetchUserData();

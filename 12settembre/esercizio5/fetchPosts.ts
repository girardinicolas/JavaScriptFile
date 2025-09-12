import { request } from './request';

// Interfaccia Post per tipizzare i dati
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Funzione che usa request per scaricare e stampare i titoli di 3 post
export async function fetchAndPrintPosts() {
    try {
        const posts = await request<Post[]>(
            'https://jsonplaceholder.typicode.com/posts?_limit=3'
        );
        posts.forEach(post => {
            console.log('Titolo:', post.title);  // tipizzato: autocompletamento su post.title
        });
    } catch (err) {
        console.error('Errore nel caricamento dei post:', err);
    }
}

fetchAndPrintPosts();

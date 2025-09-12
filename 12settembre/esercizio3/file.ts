const failPromise = new Promise<void>((_, reject) => {
    setTimeout(() => reject('Errore: promessa rifiutata!'), 1000);
});

failPromise.catch(error => console.log('Catch:', error));

async function handleAwait() {
    try {
        await new Promise<void>((_, reject) => {
            setTimeout(() => reject('Errore con await!'), 1000);
        });
    } catch (error) {
        console.log('Try/Catch:', error);
    }
}

handleAwait();

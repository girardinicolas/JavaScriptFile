export function ritarda(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function esegui() {
    await ritarda(2000);
    console.log('Pronto!');
}


esegui();

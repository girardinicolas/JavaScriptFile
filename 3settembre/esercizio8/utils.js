export function calcolaMedia(arrayNumeri) {
    const somma = arrayNumeri.reduce((acc, val) => acc + val, 0);
    return somma / arrayNumeri.length;
}

export function media(...numeri: number[]): number {
    if (numeri.length === 0) {
      return 0; // Evita divisione per zero
    }
    const somma = numeri.reduce((acc, val) => acc + val, 0);
    return somma / numeri.length;
  }
  
  // Esempi d'uso
  console.log(media(10, 20, 30));  // 20
  console.log(media(5, 15));       // 10
  console.log(media());             // 0
  
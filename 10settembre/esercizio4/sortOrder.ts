type SortOrder = 'asc' | 'desc';

export function ordinaArray(arr: number[], order: SortOrder): number[] {
  if (order === 'asc') {
    return arr.slice().sort((a, b) => a - b);
  } else if (order === 'desc') {
    return arr.slice().sort((a, b) => b - a);
  } else {
    throw new Error(`Ordine di ordinamento non valido: ${order}`);
  }
}

var numeri = [5, 2, 9, 1, 5];

console.log('Ascendente:', ordinaArray(numeri, 'asc'));
console.log('Descendente:', ordinaArray(numeri, 'desc'));

// Test errore
try {
  console.log('Errore test:', ordinaArray(numeri, 'random' as SortOrder));
} catch (e) {
  console.error('Errore catturato:', (e as Error).message);
}

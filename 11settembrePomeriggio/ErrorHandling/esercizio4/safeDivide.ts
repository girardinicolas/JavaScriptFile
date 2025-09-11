type Result<T> = 
  | { ok: true; value: T }
  | { ok: false; error: string };

export function safeDivide(a: number, b: number): Result<number> {
  if (b !== 0) {
    return { ok: true, value: a / b };
  } else {
    return { ok: false, error: 'Divisione per zero' };
  }
}

// Esempi di uso
const risultato1 = safeDivide(10, 2);
if (risultato1.ok) {
  console.log('Risultato della divisione:', risultato1.value);
} else {
  console.error('Errore:', risultato1.error);
}

const risultato2 = safeDivide(5, 0);
if (risultato2.ok) {
  console.log('Risultato della divisione:', risultato2.value);
} else {
  console.error('Errore:', risultato2.error);
}

export function parseJson<T>(raw: string): T {
    try {
      return JSON.parse(raw) as T;
    } catch {
      throw new Error('JSON non valido');
    }
  }
  
  // Test con stringa valida e non valida
  const jsonValido = '{"nome":"Anna","eta":30}';
  const jsonNonValido = '{"nome":"Anna", eta:30}';
  
  try {
    const objValido = parseJson<{ nome: string; eta: number }>(jsonValido);
    console.log('Parsing valido:', objValido);
  } catch (error) {
    console.error(error);
  }
  
  try {
    const objNonValido = parseJson<{ nome: string; eta: number }>(jsonNonValido);
    console.log('Parsing non valido:', objNonValido);
  } catch (error) {
    console.error('Errore:', (error as Error).message);
  }
  
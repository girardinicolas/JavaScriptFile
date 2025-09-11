// Definizione del type alias Status
type Status = 'pending' | 'done' | 'archived';

// Variabile di tipo Status
export let currentStatus: Status;

// Assegnazione valida
currentStatus = 'pending';

// Provo ad assegnare un valore non valido (dà errore in fase di compilazione)
// currentStatus = 'invalid'; // Errore: Type '"invalid"' is not assignable to type 'Status'.

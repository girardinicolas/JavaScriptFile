// Definizione enum Priority
export enum Priority {
    LOW,
    MEDIUM,
    HIGH
  }
  
  // Funzione che accetta solo valori di Priority
  function setPriority(priority: Priority): void {
    console.log("Priorità impostata a:", Priority[priority]);
  }
  
  // Esempi di utilizzo validi
  setPriority(Priority.LOW);
  setPriority(Priority.HIGH);
  
  // Esempio non valido (dà errore TypeScript)
  // setPriority(5); // Errore: Argument of type '5' is not assignable to parameter of type 'Priority'.
  
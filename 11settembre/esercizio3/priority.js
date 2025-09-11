// Enum trascritto in JS come oggetto
const Priority = {
    LOW: 0,
    MEDIUM: 1,
    HIGH: 2
  };
  
  // Funzione che accetta valore Priority
  function setPriority(priority) {
    const names = ['LOW', 'MEDIUM', 'HIGH'];
    console.log("Priorità impostata a:", names[priority]);
  }
  
  // Esempi di uso
  setPriority(Priority.LOW);
  setPriority(Priority.HIGH);
  
  // setPriority(5); // In JS non genera errore, attenzione!
  
// Definizione dell'interfaccia Task
interface Task {
    id: number;
    text: string;
    done: boolean;
  }
  
  // Creazione di un array di Task con due oggetti
  export const tasks: Task[] = [
    { id: 1, text: "Fare la spesa", done: false },
    { id: 2, text: "Pulire la casa", done: true }
  ];
  
  // Stampa in console
  console.log(tasks);
  
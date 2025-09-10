// Interfaccia
interface Task {
    id: number;
    text: string;
    done: boolean;
    dueDate?: string;
  }

  // Array con due task senza dueDate
export var tasks: Task[] = [
    { id: 1, text: "Fare la spesa", done: false },
    { id: 2, text: "Pulire la casa", done: true }
  ];

export var newTask: Task = {
    id: 3,
    text: "Pagare bollette",
    done: false,
    dueDate: ('2025-10-01')
  };
  
  // Stampa
  console.log(tasks);
  console.log(newTask);
  
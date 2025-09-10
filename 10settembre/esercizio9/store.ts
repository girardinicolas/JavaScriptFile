// Definizione interfaccia Task
interface Task {
    id: number;
    text: string;
    done: boolean;
    dueDate?: string;
  }
  
  // Interfaccia Store con array di Task e metodo add
  interface Store {
    tasks: Task[];
    add(task: Task): void;
  }
  
  // Implementazione oggetto Store
 export const store: Store = {
    tasks: [],
    add(task: Task) {
      this.tasks.push(task);
    }
  };
  
  // Test aggiunta task
  store.add({ id: 1, text: "Fare la spesa", done: false });
  store.add({ id: 2, text: "Pulire la casa", done: true, dueDate: '2025-10-01' });

  console.log(store.tasks);
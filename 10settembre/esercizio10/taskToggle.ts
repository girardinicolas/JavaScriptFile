interface Task {
    id: string;
    text: string;
    done: boolean;
    dueDate?: Date;
  }
  
  export function toggleTask(tasks: Task[], id: string): Task[] {
    return tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
  }
  
  // Esempio uso
  const tasks: Task[] = [
    { id: '1', text: 'Fare la spesa', done: false },
    { id: '2', text: 'Pulire la casa', done: true },
  ];
  
  const updatedTasks = toggleTask(tasks, '1');
  console.log(updatedTasks);
  
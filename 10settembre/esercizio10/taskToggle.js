function toggleTask(tasks, id) {
    return tasks.map(function (task) {
        return task.id === id ? Object.assign(Object.assign({}, task), { done: !task.done }) : task;
    });
}
// Esempio uso
var tasks = [
    { id: '1', text: 'Fare la spesa', done: false },
    { id: '2', text: 'Pulire la casa', done: true },
];
var updatedTasks = toggleTask(tasks, '1');
console.log(updatedTasks);

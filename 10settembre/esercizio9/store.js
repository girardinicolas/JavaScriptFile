var store = {
    tasks: [],
    add: function (task) {
        this.tasks.push(task);
    }
};
// Test aggiunta task
store.add({ id: 1, text: "Fare la spesa", done: false });
store.add({ id: 2, text: "Pulire la casa", done: true, dueDate: new Date('2025-10-01') });
console.log(store.tasks);

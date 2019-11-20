Vue.component('todo-list', {
    template: `
        <div>
            <ul class="todo-list">
                <li class="todo-list-item" v-for="todo in todos">{{ todo.label }}</li>
            </ul>
            <div>Всего дел: {{ todos.length }}</div>
        </div>
    `,
    props: [ 'todos' ]
});
<template>
    <div id="app">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-11">
                    <div class="card card-default">
                        <div class="panel-body">
                            <h1>Todo list {{ todoCount }}</h1>

                            <ul class="list-group">
                                <li
                                    v-for="(todo, index) in todos"
                                    :class="{'update-todo' : todo.type}"
                                    class="list-group-item"
                                >
                                    {{ todo.title }}
                                    <button
                                        @click="deleteTodo(index)"
                                        class="btn btn-success btn-sm pull-right">delete todo</button>
                                    <button
                                        @click="updateTodo(index)"
                                        class="btn btn-primary btn-sm pull-right">update todo</button>
                                </li>
                            </ul>

                            <form @submit.prevent="addTodos(newTodo)">
                                <div class="form-group">
                                    <input type="text"
                                           v-model="newTodo.title"
                                           class="form-control"
                                           placeholder="Add a new todo"
                                    />
                                </div>
                                <div class="form-group">
                                    <button
                                        class="btn btn-block btn-success"
                                        type="submit">AddTodo</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        el: '#app',
        data: () => ({
            todos: [
                { id: 1, title: 'The first is the to-do list', type: false}
            ],
            newTodo: { id: null, title: '', type: false}
        }),
        computed: {
            todoCount()
            {
                return this.todos.length
            }
        },
        methods: {
            addTodos(newTodo)
            {
                if (newTodo.title == '') return
                this.todos.push(newTodo)
                this.newTodo = { id: null, title: '', type: false}
            },
            deleteTodo(index)
            {
                this.todos.splice(index, 1)
            },
            updateTodo(index)
            {
                this.todos[index].type = !this.todos[index].type
            }
        }
    }
</script>
<style scoped>
    .container {

    }
    .container h1 {
        font-size: 38px;
        padding: 15px 18px;
    }
    .container ul {
        margin-bottom: 5px;
    }
    .col-lg-11 {
        margin-bottom: 5px;
        padding: 15px 20px;
    }
    .form-control {
        padding-left: 1.4rem
    }
    .form-group {
        margin-top: 5px;
    }
    .btn-success {
        text-align: center;
    }
    .pull-right {
        float: right;
    }
    .update-todo {
        text-decoration: line-through;
    }

</style>

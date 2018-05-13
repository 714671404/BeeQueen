<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-11">
                <div class="card card-default">
                    <div class="panel-body">
                        <h1>Todo list</h1>
                        <ul class="list-group">
                            <li class="list-group-item"
                                v-for="(todo, index) in todos"
                                :class="{'update-todo' : todo.type}"
                            >
                                <router-link :to="{name: 'hello', params: {id: todo.id}}">{{ todo.title }}</router-link>
                                <button
                                        @click="deleteTodo(todo, index)"
                                        class="btn btn-success btn-sm pull-right">delete todo</button>
                                <button
                                        @click="updateTodo(todo)"
                                        :class="{'update-todo-bottom' : todo.type}"
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
                                <button class="btn btn-block btn-success" type="submit">AddTodo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "todo",
        computed: {
            todos()
            {
                return this.$store.state.todos
            },
            newTodo()
            {
                return this.$store.state.newTodo
            }
        },
        mounted()
        {
            this.$store.dispatch('todo_loading')
        },
        methods: {
            addTodos(newTodo)
            {
                this.$store.dispatch('todo_add', newTodo)
            },
            deleteTodo(todo, index)
            {
                this.$store.dispatch('todo_delete', [todo, index])
            },
            updateTodo(todo)
            {
                this.$store.dispatch('todo_update', todo)
            }
        }
    }
</script>
<style scoped>
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
        margin-right: 5px;
    }
    .update-todo {
        text-decoration: line-through;
        color: #1e7e34;
    }
    .update-todo-bottom {
        background-color: red;
    }
</style>

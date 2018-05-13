import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        todos: [],
        newTodo: { id: null, title: '', type: 0},
        todo: {}
    },
    mutations: {
        get_todo_list(state, todos)
        {
            state.todos = todos
        },
        todo_save(state, todo)
        {
            state.todos.push(todo)
        },
        delete_todo(state, index)
        {
            state.todos.splice(index, 1)
        },
        update_todo(state, todo)
        {
            todo.type = !todo.type
        },
        get_todo(state, todo)
        {
            state.todo = todo
        }
    },
    actions: {
        todo_loading(store)
        {
            axios.get('api/todo').then(response => {
                store.commit('get_todo_list', response.data)
            })
        },
        todo_add(store, todo)
        {
            axios.post('api/todo/create', {title: todo.title}).then(response => {
                store.commit('todo_save', response.data)
            })
            store.state.newTodo = { id: null, title: '', type: 0}
        },
        todo_delete(store, todo)
        {
            axios.delete('api/todo/delete/' + todo[0].id).then(response => {
                store.commit ('delete_todo', todo[1])
            })
        },
        todo_update(store, todo)
        {
            axios.patch('api/todo/update/' + todo.id).then(response => {
                store.commit('update_todo', todo)
            })
        },
        todo_personal_loading(store, id)
        {
            axios.get('api/todo/' + id).then(response => {
                store.commit('get_todo', response.data)
            })
        }
    }
})
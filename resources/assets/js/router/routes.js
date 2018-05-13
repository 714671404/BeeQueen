const Todo = () => import('~/components/Todo').then(m => m.default || m)
const Hello = () => import('~/components/Hello').then(m => m.default || m)

export default [
    { path: '/', name: 'app', component: Todo},
    { path: '/hello/:id', name: 'hello', component: Hello},

    { path: '*', name: 'app', component: Todo}
]
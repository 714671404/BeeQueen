<template>
    <h1 class="todo-title">{{ todo }}</h1>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "hello",
        data: () => ({
            todo: {}
        }),
        mounted()
        {
            axios.get('api/todo/' + this.$route.params.id).then(response => {
                console.log(response)
                // this.todo = response.data
            })
        }
    }
</script>

<style scoped>
.todo-title {
    height: 99vh;
    font-size: 38px;
    line-height: 100vh;
    text-align: center;
}
</style>
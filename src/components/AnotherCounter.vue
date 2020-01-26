<template>
    <div>
        <button @click="incrementAsync({by: 100, duration: 500})" class="btn btn-primary">Increment Async</button>
        <button @click="decrementAsync({by: 100, duration: 1000})" class="btn btn-primary">Decrement Async</button>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex';

    export default {
        methods: {
            ...mapMutations('counter', {
                increment: 'incrementCounter',
                decrement: 'decrementCounter'
            }),
            ...mapActions('counter', {
                incrementAsync: 'incrementCounterAsync',
                decrementAsync: 'decrementCounterAsync'
            })
        }
    }
</script>
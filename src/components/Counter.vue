<template>
    <div>
        <button @click="increment" class="btn btn-primary">Increment</button>
        <button @click="decrement" class="btn btn-primary">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';

    export default {
        methods: {
            ...mapMutations('counter', {
                increment: 'incrementCounter',
                decrement: 'decrementCounter'
            })
        }
    }
</script>
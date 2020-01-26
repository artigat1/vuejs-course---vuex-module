<template>
    <div>
        <button class="btn btn-primary" @click="incrementAsync({by: 100, duration: 500})">Increment Async</button>
        <button class="btn btn-primary" @click="decrementAsync({by: 100, duration: 1000})">Decrement Async</button>
    </div>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations([
                'increment',
                'decrement'
            ]),
            ...mapActions([
                'incrementAsync',
                'decrementAsync'
            ])
        }
    }
</script>
<template>
    <div>
        <button @click="incrementAsync({by: 100, duration: 500})" class="btn btn-primary">Increment Async</button>
        <button @click="decrementAsync({by: 100, duration: 1000})" class="btn btn-primary">Decrement Async</button>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex';
    import * as types from '../store/types';

    export default {
        methods: {
            ...mapMutations({
                increment: types.INCREMENT_COUNTER,
                decrement: types.DECREMENT_COUNTER
            }),
            ...mapActions({
                incrementAsync: types.INCREMENT_COUNTER_ASYNC,
                decrementAsync: types.DECREMENT_COUNTER_ASYNC
            })
        }
    }
</script>
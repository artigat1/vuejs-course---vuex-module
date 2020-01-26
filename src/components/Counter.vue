<template>
    <div>
        <button @click="increment" class="btn btn-primary">Increment</button>
        <button @click="decrement" class="btn btn-primary">Decrement</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    import * as types from '../store/types';

    export default {
        methods: {
            ...mapMutations({
                increment: types.INCREMENT_COUNTER,
                decrement: types.DECREMENT_COUNTER
            })
        }
    }
</script>
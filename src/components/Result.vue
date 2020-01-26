<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }} {{ ourOwn }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters('counter', {
                doubleCounter: 'doubleCounter',
                stringCounter: 'clickCounter'
            }),
            ourOwn() {
                console.log('something');
                return '';
            }
        }
    }
</script>
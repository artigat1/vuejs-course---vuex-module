<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ stringCounter }} {{ ourOwn }}</p>
        <p>counter value: {{ value }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters('counter', {
                doubleCounter: 'doubleCounter',
                stringCounter: 'clickCounter',
                value: 'value'
            }),
            ourOwn() {
                console.log('something');
                return '';
            }
        }
    }
</script>
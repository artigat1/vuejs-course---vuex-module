<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result/>
                <app-another-result/>
                <hr>
                <app-counter/>
                <app-another-counter/>
                <hr/>
                <label>
                    Type new value:
                    <input type="text" v-model="value"/>
                </label>
                <p>Current value: {{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import * as types from './store/types';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter
        },

        computed: {
            value: {
                get() {
                    return this.$store.getters[types.VALUE];
                },
                set(value) {
                    this.$store.commit(types.MUTATE_UPDATE_VALUE, value);
                }
            }
        }
    }
</script>


import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        value: 0
    },

    getters,

    mutations,

    actions,

    modules: {
        counter
    },
});

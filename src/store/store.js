import Vue from 'vue';
import Vuex from 'vuex';

import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        counter
    },
    
    state: {
        value: 0
    },
    
    getters: {
        value: state => state.value
    },
    
    mutations: {
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    
    actions: {
        updateValueAsync: ({commit}, payload) => {
            setTimeout(() => {
                commit('updateValue', payload.by)
            }, payload.duration);
        }
    }
});

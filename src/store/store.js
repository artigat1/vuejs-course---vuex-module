import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    
    getters: {
        doubleCounter: state =>  {
            return state.counter * 2;
        },
        stringCounter: state => {
            return `${state.counter} clicks`;
        }
    },
    
    mutations: {
        increment: state => {
            state.counter++;
        },
        incrementBy: (state, payload) => {
            state.counter += payload;
        },
        decrementBy: (state, payload) => {
            state.counter -= payload;
        }
    },
    
    actions: {
        incrementAsync: ({ commit }, payload) => {
            setTimeout(() => {
                commit('incrementBy', payload.by)
            }, payload.duration);
        },
        decrementAsync: ({ commit }, payload) => {
            setTimeout(() => {
                commit('decrementBy', payload.by)
            }, payload.duration);
        }
    }
});

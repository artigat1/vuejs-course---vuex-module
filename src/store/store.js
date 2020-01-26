import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    
    getters: {
        doubleCounter: state =>  {
            return state.counter * 2;
        },
        stringCounter: state => {
            return `${state.counter} clicks`;
        },
        value: state => state.value
    },
    
    mutations: {
        increment: state => {
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        },
        incrementBy: (state, payload) => {
            state.counter += payload;
        },
        decrementBy: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
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
        },
        updateValueAsync: ({commit}, payload) => {
            setTimeout(() => {
                commit('updateValue', payload.by)
            }, payload.duration);
        }
    }
});

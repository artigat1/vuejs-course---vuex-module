const state = {
    counter: 0
};

const getters = {
    doubleCounter: state =>  {
        return state.counter * 2;
    },
    clickCounter: state => {
        return `${state.counter} clicks`;
    }
};

const mutations = {
    incrementCounter: state => {
        state.counter++;
    },
   decrementCounter: state => {
        state.counter--;
    },
    incrementCounterBy: (state, payload) => {
        state.counter += payload;
    },
    decrementCounterBy: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
    incrementCounterAsync: ({ commit }, payload) => {
        setTimeout(() => {
            commit('incrementCounterBy', payload.by)
        }, payload.duration);
    },
    decrementCounterAsync: ({ commit }, payload) => {
        setTimeout(() => {
            commit('decrementCounterBy', payload.by)
        }, payload.duration);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
const state = {
    counter: 0
};

const getters = {
    doubleCounter: state =>  {
        return state.counter * 2;
    },
    stringCounter: state => {
        return `${state.counter} clicks`;
    }
};

const mutations = {
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
    }
};

const actions = {
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
};

export default {
    state,
    getters,
    mutations,
    actions
}
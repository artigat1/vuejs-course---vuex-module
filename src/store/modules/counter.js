import * as types from '../types';

const state = {
    counter: 0
};

const getters = {
    [types.DOUBLE_COUNTER]: state =>  {
        return state.counter * 2;
    },
    [types.CLICK_COUNTER]: state => {
        return `${state.counter} clicks`;
    }
};

const mutations = {
    [types.INCREMENT_COUNTER]: state => {
        state.counter++;
    },
    [types.DECREMENT_COUNTER]: state => {
        state.counter--;
    },
    [types.INCREMENT_COUNTER_BY]: (state, payload) => {
        state.counter += payload;
    },
    [types.DECREMENT_COUNTER_BY]: (state, payload) => {
        state.counter -= payload;
    }
};

const actions = {
    [types.INCREMENT_COUNTER_ASYNC]: ({ commit }, payload) => {
        setTimeout(() => {
            commit(types.INCREMENT_COUNTER_BY, payload.by)
        }, payload.duration);
    },
    [types.DECREMENT_COUNTER_ASYNC]: ({ commit }, payload) => {
        setTimeout(() => {
            commit(types.DECREMENT_COUNTER_BY, payload.by)
        }, payload.duration);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}
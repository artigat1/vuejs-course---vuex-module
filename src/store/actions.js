import * as types from './types';

export default {
    [types.UPDATE_VALUE]: ({commit}, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_UPDATE_VALUE, payload.by)
        }, payload.duration);
    }
}
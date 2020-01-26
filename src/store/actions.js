export default {
    value: ({commit}, payload) => {
        setTimeout(() => {
            commit('updateValue', payload.by)
        }, payload.duration);
    }
}
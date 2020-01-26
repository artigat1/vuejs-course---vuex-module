export const updateValueAsync = ({commit}, payload) => {
    setTimeout(() => {
        commit('updateValue', payload.by)
    }, payload.duration);
};
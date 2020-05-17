export const state = () => ({
    info: null,
})

export const mutations = {
    set(state, info) {
        state.info = info;
    }
}
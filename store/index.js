export const state = () => ({
    site: {
        uuid: null
    },
    siteLanguage: '',
    toast: {
        text: '',
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        variant: null
    },
})

export const actions = {
    SET_SITE({ commit }, site) {
        commit('SET_SITE', site)
    }
}
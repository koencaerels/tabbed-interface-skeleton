import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentTab: ''
    }
    , mutations: {
        setCurrentTab(state, tab) {
            state.currentTab = tab;
        }
    }
    , actions: {}
    , modules: {}
})

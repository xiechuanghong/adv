import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tabCurI: 0,
        url1: '',
        url2: '',
        imgArr1: [],
        imgArr2: [],
        file: ''
    },
    getters: {
        getTabCurI(state) {
            console.log('tabbarCurrentI被改变了')
            return state.tabCurI
        }
    },
    mutations: {
        upTabCurI(state, curI) {
            state.tabCurI = curI
        },
        clearFrom(state, arrVal) {
            arrVal.forEach((item, index) => {
                console.log(item, index)
                state[item] = ''
            })
        }
    }
})
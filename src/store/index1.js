import Vue from 'vue';
import Vuex from 'vuex';

// 导入模块
import shop from './modules/shop'
import load from './modules/load'

Vue.use(Vuex)

export default new Vuex.Store({
    modulex: {
        load,
        shop
    }
})
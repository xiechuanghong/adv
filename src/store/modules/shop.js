import Vue from 'vue';
const state = {
    // 这里是用来存放商品状态的
}
const mutations = {
    // 这里是用来存放商品方法的
}
const getters = {
    // 如同计算属性 这里是用来处理state的某个状态
    getList(state) {

    }
}
const actions = {
    // 这里是用来处理异步请求的 可以搭配mutaions使用
}

export default {
    state,
    mutations,
    getters,
    actions
}
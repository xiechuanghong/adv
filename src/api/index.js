import axios from 'axios'
import store from '@/store/index1.js'
import { MessageBox } from 'mint-ui';
// 配置基准路径
const baseURL = 'http://192.168.0.252:8088/api/wx/'

axios.defaults.baseURL = baseURL

// 为axios添加拦截器：
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // store.commit('SET_LOADING',true);
    return config
}, function (error) {
    // 对请求错误做些什么
    console.log(error)
    // store.commit('SET_LOADING',false);
    return Promise.reject(error)
})

// 添加一个返回拦截器
axios.interceptors.response.use((response) => {
    // 请求结束
    console.log('接口调用成功')
    // store.commit('SET_LOADING',true);
    return response;
}, (error) => {
    MessageBox({
        title: '提示',
        message: error,
        showCancelButton: true
    });
    // store.commit('SET_LOADING',false);
    console.log('接口报错了~~~')
    return Promise.reject(error);
});

// 获取用户信息接口
export const GetUserInfo = (pa) => {
    return axios.get('customer/getUserInfo', { params: pa }).then((result) => {
        return result.data
    })
}

// 封装get请求
export const getApi = (url, pa) => {
    return axios.get(url, { params: pa }).then((result) => {
        console.log(result.data)
        if (result.data.code == 0) {
            return result.data
        } else {
            MessageBox({
                title: '提示',
                message: result.data.msg,
                showCancelButton: true
            });
            return result.data
        }
    }).catch((error) => {
        console.log(error)
    })
}

// 封装post请求
export const postApi = (url, pa) => {
    return axios.post(url, pa).then((result) => {
        console.log(result.data)
        if (result.data.code == 0) {
            return result.data
        } else {
            MessageBox({
                title: '提示',
                message: result.data.msg,
                showCancelButton: true
            });
            return result.data
        }
    })
}
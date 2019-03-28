import wx from 'weixin-js-sdk'                       //引入微信sdk
import { getApi, postApi } from "@/api"             //引入asios请求
const jsApiList = ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'chooseWXPay']


// 分享接口
export const getSDKshare = () => {
    getApi('').then((res) => {
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx9d399xxxxxxxxx14', // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.noncestr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名
            jsApiList: jsApiList // 必填，需要使用的JS接口列表
        })
        wx.ready(res => {
            console.log('信息验证成功');
            wx.onMenuShareAppMessage({            //分享给朋友
                title: '这里是标题',
                desc: '分享描述',
                link: '分享链接',
                imgUrl: '分享图片',
                success(res) {
                    // 用户确认分享的回调
                },
                cancel() {
                    // 用户取消分享后执行的回调
                }
            });
            wx.onMenuShareTimeline({             //分享给朋友
                title: '这里是标题',
                desc: '分享描述',
                link: '分享链接',
                imgUrl: '分享图片',
                success(res) {
                    // 用户确认分享的回调
                },
                cancel() {
                    // 用户取消分享后执行的回调
                }
            });
            wx.onMenuShareQQ({                  //分享给朋友
                title: '这里是标题',
                desc: '分享描述',
                link: '分享链接',
                imgUrl: '分享图片',
                success(res) {
                    // 用户确认分享的回调
                },
                cancel() {
                    // 用户取消分享后执行的回调
                }
            });
            wx.onMenuShareWeibo({              //分享给朋友
                title: '这里是标题',
                desc: '分享描述',
                link: '分享链接',
                imgUrl: '分享图片',
                success(res) {
                    // 用户确认分享的回调
                },
                cancel() {
                    // 用户取消分享后执行的回调
                }
            });
        });
        wx.error(res => {
            console.log('信息验证失败')
        })
    })
}

// 微信支付接口
export const getSDKpay = () => {
    getApi('').then((res) => {
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: 'wx9d399xxxxxxxxx14', // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.noncestr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名
            jsApiList: jsApiList // 必填，需要使用的JS接口列表
        })
        wx.ready(() => {
            console.log('信息验证成功');
            wx.chooseWXPay({
                timestamp: res.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: res.nonceStr, // 支付签名随机串，不长于 32 位
                package: res.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: res.paySign, // 支付签名
                success: function (res) {
                    // 这里写成功后的动作 我试过跳转路由好像不灵 或者是执行太快后端处理订单未变化呢 我改成了这个   window.location.href = "你所要跳转的页面";
                },
                cancel: function (res) {
                    alert('已取消支付');
                },
                fail: function (res) {
                    alert('购买失败，请重新创建订单')
                }
            });
            wx.error(res => {
                console.log('信息验证失败')
            })
        })
    })
}
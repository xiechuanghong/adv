<template>
  <div class="cont">
    <div class="detail-top">
      <div class="user-info">
        <img class="avatar" :src="userInfo.avatarUrl">
        <div class="name-or-phone">
          <div class="name">{{userInfo.nickname}}</div>
          <div v-if="userInfo.phone" class="phone">{{userInfo.phone}}</div>
          <router-link v-if="!userInfo.phone" :to="{name:'bindphone'}">
            <div class="phone">未绑定手机号</div>
          </router-link>
        </div>
      </div>
      <router-link :to="{ path:'/myCoin' }">
        <div class="btn-bj">
          <img src="../../assets/img/65@2x.png">
          <span>我的金币</span>
        </div>
      </router-link>
    </div>
    <div class="detail-list">
      <router-link :to="item.nav" v-for="(item,index) in listData" :key="index">
        <div class="item">
          <div class="left">
            <img class="lab" :src="item.img">
            <span>{{item.text}}</span>
          </div>
          <img class="tz" src="../../assets/img/ic_405@2x.png">
        </div>
      </router-link>
      <a href="http://wpa.qq.com/msgrd?v=3&uin=1353229631&site=qq&menu=yes">
        <div class="item">
          <div class="left">
            <img class="lab" src="../../assets/img/@2x.png">
            <span>客服</span>
          </div>
          <img class="tz" src="../../assets/img/ic_405@2x.png">
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { getApi, postApi } from "@/api";
export default {
  data() {
    return {
      listData: [
        {
          img: require("../../assets/img/share@2x.png"),
          text: "分享任务",
          nav: { path: "/taskManageList", query: { taskType: 0 } }
        },
        {
          img: require("../../assets/img/read@2x.png"),
          text: "阅读任务",
          nav: { path: "/taskManageList", query: { taskType: 1 } }
        },
        {
          img: require("../../assets/img/AD@2x.png"),
          text: "广告任务",
          nav: { path: "/taskManageList", query: { taskType: 2 } }
        },
        {
          img: require("../../assets/img/34@2x.png"),
          text: "发布任务",
          nav: { path: "/taskrelease" }
        },
        {
          img: require("../../assets/img/27@2x.png"),
          text: "账户余额",
          nav: { path: "/balance" }
        },
        {
          img: require("../../assets/img/65@2x.png"),
          text: "我的金币",
          nav: { path: "/myCoin" }
        },
        {
          img: require("../../assets/img/504@2x.png"),
          text: "绑定手机",
          nav: { path: "/user/bindPhone" }
        },
        {
          img: require("../../assets/img/63@2x.png"),
          text: "邀请好友",
          nav: { path: "/user/invite" }
        }
      ],
      userInfo: {}
    };
  },
  created() {},
  mounted() {},
  activated() {
    getApi("customer/getUserInfo", {
      openId: "wx"
    }).then(res => {
      this.userInfo = res.data;
      this.$global.userInfo = res.data;
    });
  }
};
</script>

<style scoped lang="less">
.cont {
  // position: relative;
  // height: 100%;
  // background: #f1f1f1;
  padding-bottom: 0.5rem;
}
.detail-top {
  padding: 0.25rem 0.15rem 0.12rem;
  background: #fff;
  border-bottom: 0.1rem solid #f1f1f1;
  position: relative;
  .btn-bj {
    position: absolute;
    right: 0;
    top: 0.24rem;
    width: 0.99rem;
    height: 0.36rem;
    background: #ffdeb1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff9500;
    border-radius: 0.2rem 0rem 0rem 0.2rem;
    img {
      width: 0.24rem;
      height: 0.24rem;
    }
    span {
      font-size: 0.13rem;
      margin-left: 0.04rem;
    }
  }
  .user-info {
    margin-bottom: 0.32rem;
    display: flex;
    align-items: center;
    .avatar {
      width: 0.72rem;
      height: 0.72rem;
      border-radius: 50%;
      margin-right: 0.12rem;
    }
  }
  .name-or-phone {
    .name {
      font-size: 0.2rem;
      font-weight: 600;
      margin-bottom: 0.04rem;
    }
    .phone {
      color: #007aff;
      font-size: 0.14rem;
    }
  }
}

.detail-list {
  background: #fff;
  a {
    color: #000;
    font-size: 14px;
  }
  .item {
    border-bottom: 0.01rem solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.13rem 0.15rem;
    .left {
      display: flex;
      align-items: center;
    }
  }
  .lab {
    width: 0.24rem;
    height: 0.24rem;
    margin-right: 0.15rem;
  }
  .tz {
    width: 0.12rem;
    height: 0.12rem;
  }
}
</style>
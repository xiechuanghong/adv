<template>
  <div class="cont">
    <div class="cont-title">
      <div class="title">{{articleDetail.title}}</div>
      <div class="time">
        <span class="text">{{articleDetail.customer}}</span>
        <span>日期：{{articleDetail.createdDate | date}}</span>
      </div>
    </div>
    <div class="html" v-html="articleDetail.content"></div>
    <!-- <div class="articleGold" style="{{isYd == true ? "opacity:1":"opacity:0;"}}">已赚取5金币</div> -->
    <div class="articleGold" :style="{'opacity':isYd == true ? '1':'0'}">已赚取5金币</div>

    <!-- <div class="articleGold" :style="{'opacity:1':isYd == true : 'opacity:0'}">已赚取5金币</div> -->
    <div class="bottom-btn">
      <div class="zw"></div>
      <div class="btn" style="margin-right:48rem;">
        <img src="../../assets/img/1283@2x.png">
        <span>分享至微信好友</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getApi, postApi } from "@/api";
export default {
  data() {
    return {
      articleDetail: "",
      timeout: "",
      isYd: false
      // key: value
    };
  },
  methods: {
    // 获取文章详情
    getArticleDetail() {
      getApi("queryArticleOne", {
        id: this.$route.query.id,
        openId: this.$global.openId
      }).then(res => {
        this.articleDetail = res.data;
      });
    },
    // 阅读金币的添加
    getArticleGold() {
      postApi("goldReward", {
        articleId: this.$route.query.id,
        openId: this.$global.openId
      }).then(res => {
        this.isYd = res.data;
        setTimeout(() => {
          this.isYd = false;
        }, 2000);
        console.log("发送请求", res);
      });
    }
  },
  created() {
    let that = this;
    this.getArticleDetail();
    this.timeout = setTimeout(() => {
      that.getArticleGold();
    }, 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
    console.log("页面离开了");
  }
};
</script>

<style >
.zw {
  height: 0.44rem;
}
.bottom-btn {
  display: flex;
  margin-top: 0.24rem;
  margin-left: 0.15rem;
}

.bottom-btn .btn {
  /* width: 240rem; */
  height: 0.44rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e5e5ea;
  font-size: 0.14rem;
  color: #333;
  border-radius: 0.04rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.bottom-btn img {
  width: 0.24rem;
  height: 0.24rem;
  margin: 0 0.12rem 0 0.08rem;
}

.cont {
  /* padding: 0.1rem 0rem; */
}

.cont-title {
  padding: 0.1rem 0.15rem 0;
}

.cont .title {
  font-size: 0.17rem;
  font-weight: 600;
}

.cont .time {
  margin: 0.08rem 0 0.16rem;
  font-size: 0.12rem;
  color: #8e8e93;
}

.cont .time .text {
  margin-right: 0.15rem;
}
.html {
  padding: 0 10px;
}
p {
  color: #000;
}
.html img {
  width: 100% !important;
}
.articleGold {
  position: fixed;
  bottom: 0.7rem;
  right: 0.15rem;
  background: #ff9500;
  color: #fff;
  padding: 0.06rem 0.15rem;
  border-radius: 1.5rem;
  font-size: 0.12rem;
  opacity: 0;
  transition: all 2s;
}
</style>
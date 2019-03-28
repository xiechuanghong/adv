<template>
  <div
    class="cont"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="0"
  >
    <div class="search-box">
      <div class="text">
        <span>{{address}}</span>
        <img @click="sexpopup = true" src="../../assets/img/405@2x.png">
      </div>
      <div class="search">
        <input placeholder="特朗普又胖了" v-model="inputVal" bindinput="getInputVal">
        <div class="btn" bindtap="onSearch">
          <img src="../../assets/img/Search@2x.png">
        </div>
      </div>
    </div>
    <!-- color:#007AFF;font-size:34rpx; -->
    <div class="slide-box">
      <div
        :class="[{ active:currentIndex == index },'slide-item ']"
        v-for="(item,index) in scrollX"
        :key="index"
        @click="currentIndex = index"
      >{{item.name}}</div>
    </div>

    <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="(item,index) in banner" :key="index">
        <img class="ban" :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>

    <div class="list">
      <div class="title">最新发布</div>
      <router-link
        :to="{ name:'recommend',query:{ id:item.id } }"
        v-for="(item,index) in list.article"
        :key="index"
      >
        <div class="item">
          <div v-if="index == 0">
            <div class="text">
              <span>{{item.title}}</span>
            </div>
            <div class="image">
              <img v-for="(item,index) in item.cover" :key="index" :src="item">
            </div>
            <div class="userName-or-time">
              <span class="userName">{{item.customer}}</span>
              <span class="time">日期：{{item.createdDate | date}}</span>
            </div>
          </div>
          <div v-else>
            <div class="text-or-img">
              <span>{{item.title}}</span>
              <img :src="item.cover[0]">
            </div>
            <div class="userName-or-time">
              <span class="userName">{{item.customer}}</span>
              <span class="time">日期：{{item.createDate | date}}</span>
            </div>
          </div>
        </div>
      </router-link>
      <div v-if="list.article.length == 0" class style="text-align:center;">没有更多数据~</div>
    </div>

    <div class="mask" v-if="mask.flag == false">
      <div class="img-box">
        <img @click="mask = false" mode="widthFix" src="../../assets/img/513@2x.png">
        <div class="signDay">已签到{{mask.signTime +1}}天</div>
        <div class="getNum">
          <div class="num">本次获得{{mask.gold}}金币</div>
          <div class="tip">明天连续签到可获得{{mask.gold}}金币</div>
        </div>
      </div>
    </div>

    <!-- <picker :result.sync="sexpopup"></picker> -->
    <picker :result="sexpopup" @changepop="changePop"></picker>
  </div>
</template>

<script>
import { getApi, postApi } from "@/api";
import picker from "../../components/addresspicker.vue";

export default {
  data() {
    return {
      list: {
        article: []
      },
      scrollX: [],
      currentIndex: 0,
      mask: "",
      loading: true,
      inputVal: "",
      name: "",
      banner: [],
      sexpopup: false,
      address: "番禺区"
    };
  },
  components: {
    picker
  },
  methods: {
    // 获取首页频道
    getChannels() {
      getApi("channels", {}).then(res => {
        this.scrollX = res.data;
        console.log(this.scrollX);
      });
    },
    // 获取列表
    getArticlejList(from, title) {
      getApi("article/articleView", {
        name: this.name,
        from: from,
        size: 10,
        title: title || ""
      }).then(res => {
        res.data.dataList.forEach((item, index) => [
          (item.cover = item.cover.split(","))
        ]);
        this.list.article.push(...res.data.dataList);
        this.list.from = res.data.from;
        this.list.size = res.data.size;
        this.list.pageCount = res.data.pageCount;
        this.loading = false;
      });
    },
    // 获取轮播图图片
    getCarousel() {
      getApi("carousel", {}).then(res => {
        this.banner = res.data;
      });
    },
    // 是否签到接口
    signed(signTime) {
      return new Promise((resolve, reject) => {
        getApi("signed", {
          openId: this.$global.openId,
          signTime: signTime || ""
        }).then(res => {
          this.mask = res.data;
          resolve(res);
        });
      });
    },
    // 下拉到底部
    loadMore() {
      if (this.list.from >= this.list.pageCount) {
        this.$toast("没有更多数据了~44~");
        // this.loading = true;
        return;
      } else if (this.list.article.length > 0) {
        this.getArticlejList(this.list.from + this.list.size);
      }
    },
    changePop(val) {
      this.sexpopup = val;
      console.log(val);
    }
  },
  watch: {
    currentIndex(newVal, oldVal) {
      this.list.article = [];
      this.name = newVal == 0 ? "" : this.scrollX[newVal].name;
      this.getArticlejList(1);
    },
    inputVal(newVal, oldVal) {
      this.list.article = [];
      this.getArticlejList(1, newVal);
    },
    $route: {
      handler: function(to, oldVal) {
        console.log(12345);
        if (to.name == "home") {
          this.loading = false;
        } else {
          this.loading = true;
        }
      },
      // 深度观察监听
      deep: true
    }
  },
  created() {
    Promise.all([
      this.getChannels(),
      this.getArticlejList(1),
      this.getCarousel(),
      this.signed()
    ]).then(res => {
      // 判断是否签到
      if (res[3].data.flag == false) {
        postApi("signed", {
          openId: this.$global.openId,
          signTime: res[3].data.signTime + 1
        }).then(res => {});
      }
    });
  },
  mounted() {
    console.log("sdflkjewrkwejr");
  },
  // 缓存时调用
  activated() {}
};
</script>

<style scoped lang="less">
.cont {
  padding-bottom: 0.5rem;
}
.slide-box {
  // margin-top: 200px;
  display: -webkit-box;
  overflow-x: scroll;
  height: 0.4rem;
  line-height: 0.4rem;
  -webkit-overflow-scrolling: touch;

  word-break: break-all;
}
.slide-item {
  padding: 0 0.12rem;
  font-size: 0.14rem;
  color: #333;
}

.slide-item.active {
  color: #007aff;
  font-size: 0.17rem;
}

.mint-swipe {
  height: 1.4rem;
}
.mint-swipe img {
  height: 100%;
  width: 100%;
}

a {
  color: #000;
}

.search-box {
  height: 0.54rem;
  background: #007aff;
  display: flex;
  align-items: center;
  padding: 0 0.15rem;
}

.search-box .text {
  color: #fff;
  display: flex;
  align-items: center;
}

.search-box .text text {
  font-size: 0.12rem;
}

.search-box .text img {
  width: 0.1rem;
  height: 0.1rem;
  margin-left: 0.04rem;
}

.search {
  /* width: 558rem; */
  overflow: hidden;
  flex: 1;
  height: 0.36rem;
  display: flex;
  background: #fff;
  border-radius: 0.04rem;
  margin-left: 0.1rem;
}

.search input {
  overflow: hidden;
  flex: 1;
  height: 100%;
  padding-left: 0.16rem;
  border: none;
}

.search .btn {
  padding: 0 0.15rem;
  display: flex;
  align-items: center;
  background: #5ac8fa;
}

.search img {
  width: 0.24rem;
  height: 0.24rem;
}

.list {
  padding: 0 0.15rem;
  margin-top: 0.24rem;
}

.list .title {
  font-size: 0.17rem;
  color: #000;
  position: relative;
  padding-left: 0.12rem;
  display: flex;
  align-items: center;
}

.list .title::before {
  content: "";
  width: 0.04rem;
  height: 0.16rem;
  background: #000;
  position: absolute;
  left: 0rem;
  top: 0.04rem;
}

.list .item {
  padding: 0.14rem 0;
  border-bottom: 0.01rem solid #f1f1f1;
}

.list .item .text {
  font-size: 0.17rem;
  font-family: PingFang SC;
  font-weight: 400;
}

.list .item .image {
  margin: 0.1rem 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}

.list .item .image:after {
  content: "";
  width: 1.12rem;
}

.list .item .image img {
  width: 1.12rem;
  height: 0.84rem;
  margin-bottom: 0.05rem;
}

.list .text-or-img {
  display: flex;
  justify-content: space-between;
}

.list .text-or-img text {
  flex: 1;
  font-size: 0.17rem;
  font-family: PingFang SC;
  font-weight: 400;
  /* line-height:48rem; */
}

.list .text-or-img img {
  width: 1.12rem;
  height: 0.84rem;
  margin-left: 0.19rem;
}

.list .userName-or-time {
  color: #8e8e93;
  font-size: 0.12rem;
  margin-top: 0.1rem;
}

.list .userName-or-time .time {
  margin-left: 0.2rem;
}

.mask {
  position: fixed;
  /* top: 180rem;
  left: 76rem; */
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 9;
}

.mask .img-box {
  position: absolute;
  top: 0.9rem;
  left: 0.38rem;
  z-index: 100;
  width: 3rem;
}

.mask .img-box img {
  width: 100%;
}

.mask .img-box .signDay {
  position: absolute;
  top: 0.86rem;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 0.14rem;
  font-weight: 500;
  color: #f7931e;
}

.mask .img-box .getNum {
  position: absolute;
  bottom: 0.6rem;
  width: 100%;
  text-align: center;
}

.mask .getNum .num {
  color: #f7931e;
  font-size: 0.2rem;
  font-weight: 500;
}

.mask .getNum .tip {
  font-size: 0.12rem;
  font-weight: 400;
  color: #f7931e;
  margin-top: 0.04rem;
}
</style>
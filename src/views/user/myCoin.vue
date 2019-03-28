<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
    <div class="detail top">
      <img class="coin-img" src="../../assets/img/8@2x.png">
      <div class="text">总金币</div>
      <div class="sum">{{$global.userInfo.gold}}个</div>
    </div>

    <div class="detail ec">
      <div class="row">
        <div
          :class="[{ active: current== index }, 'coin-box']"
          v-for="(item,index) in ecData"
          :key="index"
          @click="(current = index)"
        >
          <div>{{item.balace}}元</div>
          <div>需{{item.gold}}金币</div>
        </div>
      </div>
      <div class="btn" @click="onExchange">兑换</div>
    </div>

    <div class="detail list" style="border:none;">
      <div class="title">我的金币</div>
      <div class="item" v-for="(item,index) in list.goldRecoed" :key="index">
        <div class="text-or-time">
          <div class="text">{{item.description}}</div>
          <div class="time">{{item.createdDate | date}}</div>
        </div>
        <div class="sum">{{item.gold}}个</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getApi, postApi } from "@/api";
export default {
  data() {
    return {
      loading: true,
      current: 0,
      ecData: [],
      list: {
        goldRecoed: []
      }
    };
  },
  methods: {
    // 获取兑换列表
    getGoldLists() {
      getApi("getGoldLists", {}).then(res => {
        this.ecData = res.data.dataList;
      });
    },
    // 获取金币记录
    getGoldRecord(from) {
      getApi("getGoldRecord", {
        openId: this.$global.openId,
        from: from,
        size: 10
      }).then(res => {
        this.list.goldRecoed.push(...res.data.dataList);
        this.list.from = res.data.from;
        this.list.pageCount = res.data.pageCount;
        this.loading = false;
      });
    },
    // 下拉到底部
    loadMore() {
      console.log(123);
      if (this.list.from >= this.list.pageCount) {
        this.$toast("没有更多数据了~~");
        // this.loading = true;
        return;
      }
      this.getGoldRecord(++this.list.from);
    },
    // 点击兑换金币
    onExchange() {
      postApi("exchange", {
        openId: this.$global.openId,
        goldId: this.ecData[this.current].id
      }).then(res => {
        this.$toast({ message: "兑换成功", duration: 1000 });
        setTimeout(() => {
          // this.$router.go(-1);
          this.$router.replace({ name: "user" });
        }, 1000);
      });
    }
  },
  created() {
    Promise.all([this.getGoldLists(), this.getGoldRecord(1)]);
  }
};
</script>

<style scoped lang="less">
.detail {
  border-bottom: 0.1rem solid #ececec;
  &.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.1rem 0;
    background: #fff;
    .coin-img {
      width: 0.48rem;
      height: 0.48rem;
    }
    .text {
      font-size: 0.17rem;
      color: #ff9500;
      margin-bottom: 0.04rem;
    }
    .sum {
      font-size: 0.24rem;
      color: #ff9500;
      font-weight: 600;
    }
  }
  &.ec {
    padding: 0.2rem 0.24rem 0.24rem;
    background: #fff;
    .row {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .coin-box {
        width: 1.28rem;
        height: 0.56rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        border: 0.01rem solid #007aff;
        border-radius: 0.08rem;
        margin-bottom: 0.16rem;
        font-size: 0.17rem;
        color: #007aff;
        &.active {
          background: #007aff;
          color: #fff;
        }
      }
    }
    .btn {
      width: 2.4rem;
      height: 0.49rem;
      margin: 0 auto;
      background: #007aff;
      box-shadow: 0px 0.08rem 0.15rem rgba(0, 122, 255, 0.26);
      border-radius: 0.08rem;
      color: #fff;
      text-align: center;
      line-height: 0.49rem;
      font-size: 0.2rem;
      margin-top: 0.2rem;
    }
  }
  &.list {
    background: #fff;
    .title {
      padding: 0.12rem 0.15rem;
      font-size: 0.17rem;
      font-weight: 600;
      border-bottom: 0.01rem solid #eee;
    }
    .item {
      display: flex;
      padding: 0.06rem 0.15rem;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.01rem solid #eee;
      .time {
        font-size: 0.12rem;
        color: #707074;
        margin-top: 0.06rem;
      }
    }
    .sum {
      font-size: 0.2rem;
      font-weight: 600;
    }
  }
}
</style>
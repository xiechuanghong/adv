<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
    <div class="detail top">
      <div class="card">
        <img mode="widthFix" src="../../../assets/img/502@2x.png">
        <div class="bal">
          <div class="text">总金额</div>
          <div class="sum">{{$global.userInfo.balance}}</div>
        </div>
      </div>
      <router-link :to="{ path:'/balance/getCash' }">
        <div class="btn">提现</div>
      </router-link>
      <div class="tip">
        <img src="../../../assets/img/checkmark@2x.png">
        <span>温馨提示：绑定手机号后即可提现哦~</span>
      </div>
    </div>

    <div class="detail tab">
      <div class="tab-title">
        <div :class="[{active:currentTab == 0},'item']" @click="currentTab = 0">收入记录</div>
        <div class="line"></div>
        <div :class="[{active:currentTab == 1},'item']" @click="currentTab = 1">提现记录</div>
      </div>
      <div class="tab-cont">
        <div class="item" v-for="(item,index) in list.record" :key="index">
          <div class="text-or-time">
            <div class="text">{{item.description}}</div>
            <div class="time">{{item.createdDate | date}}</div>
          </div>
          <div class="sum" v-if="item.money>0">+{{item.money}}</div>
          <div class="sum" v-if="item.money<=0">{{item.money}}</div>
        </div>
      </div>
    </div>
    <div v-if="list.from == list.pageCount" style="text-align:center;">没有更多数据~</div>
  </div>
</template>

<script>
import { getApi, postApi } from "@/api";
export default {
  data() {
    return {
      currentTab: 0,
      list: {
        record: []
      },
      loading: true
    };
  },
  watch: {
    currentTab(newVal, oldVal) {
      this.list.record = [];
      this.getBalanceRecord(1);
    }
  },
  methods: {
    // 获取账户记录
    getBalanceRecord(from) {
      getApi("balance/balanceRecord", {
        openId: this.$global.openId,
        from: from,
        size: 10,
        type: this.currentTab
      }).then(res => {
        this.list.record.push(...res.data.dataList);
        this.list.from = res.data.from;
        this.list.pageCount = res.data.pageCount;
        this.loading = false;
      });
    },
    // 上拉加载更多
    loadMore() {
      if (this.list.from >= this.list.pageCount) {
        this.$toast("没有更多数据了~~");
        this.loading = true;
        return;
      }
      this.getBalanceRecord(++this.list.from);
    }
  },
  created() {
    this.getBalanceRecord(1);
  }
};
</script>

<style scoped lang="less">
.detail {
  background: #fff;
  &.top {
    padding: 0.2rem 0.15rem;
    border-bottom: 0.1rem solid #ececec;
    .btn {
      width: 2.4rem;
      height: 0.49rem;
      background: #007aff;
      box-shadow: 0rem 0.08rem 0.15rem rgba(0, 122, 255, 0.26);
      border-radius: 0.08rem;
      margin: 0 auto;
      margin-top: 0.35rem;
      text-align: center;
      line-height: 0.49rem;
      color: #fff;
      font-size: 0.2rem;
    }
    .tip {
      text-align: center;
      font-size: 0.11rem;
      color: #007aff;
      margin-top: 0.08rem;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 0.12rem;
        height: 0.12rem;
        margin-right: 0.04rem;
      }
    }
  }
  .card {
    position: relative;
    img {
      width: 3.45rem;
    }
    .bal {
      position: absolute;
      top: 0.43rem;
      left: 0.2rem;
      color: #fff;
      .text {
        font-size: 0.2rem;
      }
      .sum {
        font-size: 0.48rem;
        margin-top: 0.36rem;
      }
    }
  }
  &.tab {
    .tab-title {
      display: flex;
      height: 0.41rem;
      border-bottom: 0.01rem solid #eee;
      justify-content: center;
      align-items: center;
      color: #d1d1d6;
      font-size: 0.15rem;
    }
    .tab-title .item.active {
      color: #000;
    }
    .tab-title .line {
      width: 0.01rem;
      height: 0.14rem;
      background: #707074;
      margin: 0 0.5rem;
    }
    .tab-cont .item {
      display: flex;
      padding: 0.06rem 0.15rem;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.01rem solid #eee;
    }
    .tab-cont .item .text {
      font-size: 0.15rem;
    }
    .tab-cont .item .time {
      font-size: 0.12rem;
      color: #707074;
      margin-top: 0.06rem;
    }
    .tab-cont .item .sum {
      font-size: 0.2rem;
      font-weight: 600;
    }
  }
}
</style>
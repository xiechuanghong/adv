<template>
  <div class="cont">
    <div class="left">
      <div
        :class="[{active:index == currentI},'item']"
        v-for="(item,index) in lArr"
        :key="index"
        @click="currentI = index"
      >{{item}}</div>
    </div>
    <div class="right">
      <div class="title">实时分类推荐</div>
      <div class="list">
        <router-link :to="{name:'shoplist'}" v-for="(item,index) in rArr" :key="index">
          <div class="item" v-for="(item,index) in rArr" :key="index">
            <img src="@/assets/img/u=604482600,1393215599&fm=26&gp=0.jpg" alt>
            <p>笔记本电脑</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lArr: [
        "为你推荐",
        "手机数码",
        "运动户外",
        "女装",
        "食品",
        "百货",
        "手机数码",
        "食品",
        "手机数码",
        "女装",
        "百货",
        "运动户外",
        "食品",
        "百货",
        "手机数码"
      ],
      rArr: [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      currentI: 0
    };
  }
};
</script>

<style scoped lang="less">
.cont {
  display: flex;
  height: 100%;
  overflow: hidden;
  background: #f1f1f1;
  padding-bottom: 0.5rem;
  .left {
    width: 0.84rem;
    overflow-y: scroll;
    font-size: 0.16rem;
    font-family: PingFang SC;
    font-weight: 500;
    .item {
      height: 0.48rem;
      text-align: center;
      line-height: 0.48rem;
      background: #fff;
      margin-bottom: 0.01rem;
    }
    .item.active {
      background: transparent;
      color: #007aff;
      position: relative;
    }
    .item.active::before {
      content: "";
      position: absolute;
      height: 0.36rem;
      width: 0.02rem;
      background: #007aff;
      left: 0;
      top: 0.06rem;
    }
  }
  .right {
    flex: 1;
    overflow-y: scroll;
    padding-left: 0.1rem;
    padding-right: 0.15rem;
    color: #333;
    .title {
      height: 0.48rem;
      padding-top: 0.2rem;
    }
    .list {
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
      background: #fff;
      padding: 0.075rem 0.15rem;
    }
    p {
      margin: 0;
      margin-top: 0.08rem;
      font-size: 0.13rem;
    }
    .list::after {
      content: "";
      width: 0.72rem;
      //   flex: 1;
    }
    .item {
      //   flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.075rem 0;
    }
    .item img {
      width: 0.72rem;
      height: 0.72rem;
    }
  }
}
</style>
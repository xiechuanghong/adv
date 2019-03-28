<template>
  <div class="cont">
    <div class="title">
      <div
        v-for="(item,index) in titleArr"
        :key="index"
        :class="[{'active':currentIndex == index},'item']"
        @click="currentIndex = index"
      >{{item}}</div>
    </div>
    <div class="list">
      <router-link :to="{ name:'shopdetail' }" v-for="(item,index) in listData" :key="index">
        <div class="item">
          <img src="@/assets/img/u=604482600,1393215599&fm=26&gp=0.jpg" alt>
          <div class="box">
            <p>
              小米9送屏碎保+无线充
              小米9送屏碎保+
            </p>
            <div class="jg">
              <div class="ft">
                <span>￥</span>2999
              </div>
              <div class="gd">...</div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
      titleArr: ["综合", "销量", "最新"],
      currentIndex: 0
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.cont {
  height: 100%;
  background: #f1f1f1;
}
.title {
  display: flex;
  justify-content: space-around;
  background: #fff;
  box-shadow: 0px 1px 1px rgba(96, 96, 96, 0.09);
  .item {
    height: 0.36rem;
    line-height: 0.36rem;
    position: relative;
  }
  .item.active::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0.24rem;
    height: 0.02rem;
    background: #007aff;
  }
}
.list {
  padding: 0.15rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #f1f1f1;
  .item {
    width: 1.7rem;
    background: #fff;
    margin-bottom: 0.05rem;
    border-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
      height: 1.44rem;
      background: #dadadf;
    }
  }
  .box {
    padding: 0.12rem 0.08rem;
    p {
      color: #000;
      font-size: 0.15rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .jg {
      display: flex;
      justify-content: space-between;
    }
    .ft {
      color: #007aff;
      font-size: 0.2rem;
    }
    .ft span {
      font-size: 0.1rem;
    }
  }
}
</style>
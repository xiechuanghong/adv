<template>
  <div>
    <div class="detail">
      <mt-swipe :show-indicators="false">
        <mt-swipe-item v-for="(item,index) in banner" :key="index">
          <img class="ban" :src="item" alt>
        </mt-swipe-item>
      </mt-swipe>
      <div class="box">
        <p>apple iMAc 22寸一体机(2017款四核阿斯哦蒂 Core i5/8GB内存 只显示两行，其余用点点点</p>
        <div class="jg">
          <div class="jg-box">
            <span class="text">商品价格</span>
            <div class="sum">
              <span>￥</span>2999.00
            </div>
            <span class="ySum">￥10000.00</span>
          </div>
          <div class="mui-numbox" data-numbox-min="0" ref="numbox">
            <!-- "-"按钮，点击可减小当前数值 -->
            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
            <input class="mui-numbox-input" type="number">
            <!-- "+"按钮，点击可增大当前数值 -->
            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
          </div>
        </div>
        <div class="kd">
          <span>快递：10.00</span>
          <span>快递：10.00</span>
        </div>
      </div>
    </div>
    <div class="shop-detail">
      <div class="title">商品详情</div>
      <div class="shop-img">
        <div class="item">
          <img src="http://dummyimage.com/600x600/5a9e6e/FFF.png" alt>
        </div>
        <div class="item">
          <img src="http://dummyimage.com/600x600/5a9e6e/FFF.png" alt>
        </div>
        <div class="item">
          <img src="http://dummyimage.com/600x600/5a9e6e/FFF.png" alt>
        </div>
        <div class="item">
          <img src="http://dummyimage.com/600x600/5a9e6e/FFF.png" alt>
        </div>
        <div class="item">
          <img src="http://dummyimage.com/600x600/5a9e6e/FFF.png" alt>
        </div>
      </div>
    </div>
    <div class="footer">
      <router-link :to="{}">
        <img src="../../assets/img/63@2x.png" alt>
        <br>
        <span>客服</span>
      </router-link>
      <router-link :to="{}">
        <img src="../../assets/img/63@2x.png" alt>
        <br>
        <span>购物车</span>
      </router-link>
      <div class="btn" style="background:#EE9C3C">加入购物车</div>
      <router-link :to="{path:'/confirmOrder'}">
        <div class="btn" style="background:#C91521">立即购买</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [
        require("../../assets/img/u=604482600,1393215599&fm=26&gp=0.jpg"),
        require("../../assets/img/u=604482600,1393215599&fm=26&gp=0.jpg")
      ]
    };
  },
  methods: {},
  created() {},
  mounted() {
    mui(this.$refs.numbox).numbox();
  }
};
</script>

<style scoped lang="less">
.mint-swipe {
  height: 2rem;
}
.mint-swipe img {
  height: 100%;
  width: 100%;
}
.detail {
  border-bottom: 0.1rem solid #ececec;
}
.box {
  padding: 0.12rem 0.15rem;
  p {
    font-size: 0.16rem;
    color: #000;
  }
  .jg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .jg-box {
      display: flex;
    }
    .text {
      font-size: 0.14rem;
    }
    .sum {
      font-size: 0.2rem;
      color: #c91521;
      span {
        font-size: 0.1rem;
      }
    }
    .ySum {
      font-size: 0.12rem;
      color: #c7c7cc;
      text-decoration: line-through;
      margin-left: 12px;
    }
  }
  .kd {
    margin-top: 0.12rem;
    display: flex;
    justify-content: space-between;
    color: #878787;
    font-size: 0.14rem;
  }
}
.mui-numbox {
  width: 90px;
  height: 30px;
  padding: 0 25px 0 25px;
  .mui-btn {
    width: 25px;
  }
}
.title {
  height: 0.38rem;
  line-height: 0.38rem;
  text-align: center;
  font-size: 17px;
  border-bottom: 1px solid #f1f1f1;
}
.shop-img .item {
  width: 100%;
  height: 450px;
  background: #ccc;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  height: 0.5rem;
  a {
    flex: 1;
    text-align: center;
    background: #fff;
    span {
      font-size: 0.1rem;
      color: #707070;
    }
  }
  img {
    width: 0.24rem;
    height: 0.24rem;
  }
  .btn {
    width: 1.15rem;
    text-align: center;
    line-height: 0.5rem;
    color: #fff;
  }
}
</style>
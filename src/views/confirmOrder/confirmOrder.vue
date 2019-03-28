<template>
  <div class="container">
    <router-link :to="{path:'/confirmOrder'}" class="address-container detail">
      <img src="../../assets/img/@2x.png" alt class="location-icon">
      <div class="address-empty-left">
        <div class="address-detail-container">
          <div class="user-info">
            <span>收货人：胡呼呼</span>
            <span>1834563454345</span>
          </div>
          <div class="address-detail">
            <p>广东省 广州市 番禺区 东环街道 东环街 南3号 骏盈大厦C座302</p>
          </div>
        </div>
      </div>
      <div class="address-empty-right">
        <img src="../../assets/img/ic_405@2x.png" alt class="address-nav-icon">
      </div>
    </router-link>
    <section class="shop-list detail">
      <div class="shop-empty-left">
        <img src="../../assets/img/u=604482600,1393215599&fm=26&gp=0.jpg" alt class="shop-img">
      </div>
      <div class="shop-empty-right">
        <p class="shop-text">我是商品标题，最多显示两行，多余内容用点点代替，ask的机会</p>
        <div class="shop-num">
          <span style="color:#0074ff;">￥10.00</span>
          <span style="color:#8f8f94">X1</span>
        </div>
      </div>
    </section>
    <section class="way-list detail">
      <div class="item">
        <span>配送方式</span>
        <span>快递 包邮</span>
      </div>
      <div class="item">
        <span>买家留言：</span>
        <input type="text" placeholder="选填">
      </div>
    </section>
    <section class="confrim-oredr">
      <div class="price">
        <span style="font-size:.13rem;">共一件，合计：</span>
        <span style="color:#0074ff;font-size:.2rem;">￥10.00</span>
      </div>
      <div class="confirm">立即购买</div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.container {
  background: #f1f1f1;
  position: relative;
  height: 100%;
}
.detail {
  background: #fff;
  border-bottom: 10px solid #f1f1f1;
}
.address-container {
  padding: 15px;
  display: flex;
  align-items: center;
  .location-icon {
    width: 0.2rem;
    height: 0.2rem;
  }
  .address-empty-left {
    display: flex;
    align-items: center;
    flex: 1;
    .address-detail-container {
      font-size: 0.15rem;
      margin-left: 10px;
      flex: 1;
    }
    p {
      margin: 0;
    }
    .user-info {
      font-size: 0.16rem;
    }
  }
  .address-empty-right img {
    width: 0.18rem;
    height: 0.18rem;
  }
}
.shop-list {
  padding: 20px 15px;
  display: flex;
  .shop-empty-left {
    img {
      width: 0.88rem;
      height: 0.88rem;
      border-radius: 5px;
    }
  }
  .shop-empty-right {
    float: 1;
    margin-left: 15px;
    p {
      color: #000;
      font-size: 0.17rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .shop-num {
      display: flex;
      justify-content: space-between;
      margin-top: 0.2rem;
      font-size: 17px;
    }
  }
}
.way-list {
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.49rem;
    line-height: 0.49rem;
    padding: 0 0.15rem;
    border-bottom: 1px solid #ececec;
  }
  input {
    flex: 1;
    border: none;
    margin: 0;
  }
}
.confrim-oredr {
  position: fixed;
  bottom: 0;
  display: flex;
  height: 0.49rem;
  align-items: center;
  background: #fff;
  width: 100%;
  .price {
    flex: 1;
    padding: 0.18rem;
  }
  .confirm {
    width: 1.48rem;
    height: 100%;
    background: #0074ff;
    color: #fff;
    text-align: center;
    line-height: 0.49rem;
    font-size: 0.18rem;
  }
}
</style>
<template>
  <div class="cont">
    <div class="sy" @click="popupVisible = true">
      <span>使用须知</span>
      <img src="../assets/img/checkmark@2x.png" alt>
    </div>
    <div class="bottom">
      <a href="http://wpa.qq.com/msgrd?v=3&uin=1353229631&site=qq&menu=yes">
        <div class="btn">联系客服</div>
      </a>
      <div class="lr">
        <a @click="onClick('true')">
          <div class="l">已添加文档</div>
        </a>
        <a class="r" @click="onClick('false')">
          <div>未添加文档</div>
        </a>
      </div>
      <div class="dl">
        <p>将文档发送给客服后</p>
        <p>点击“已添加文档”即可</p>
      </div>
    </div>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <div class="popup">
        <p>1.点击联系客服</p>
        <p>2.将您所要发布的图文进行整合文档发送给客服人员</p>
        <p>3.点击已添加文档</p>
        <p>4.发布任务界面会显示已添加文档</p>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupVisible: false
    };
  },
  methods: {
    onClick(val) {
      this.$store.state.file = val
      console.log(this.$store.state)
      this.$global.file = val;
      this.$router.replace({ name: "text" });
    }
  }
};
</script>

<style scoped lang="less">
.mint-popup {
  width: 85%;
  padding: 15px;
}
.popup p {
  font-size: 12px;
}
.sy {
  position: fixed;
  right: 0.15rem;
  top: 0.12rem;
  color: #333;
  font-size: 12px;
  display: flex;
  align-items: center;
  span {
    margin-right: 0.04rem;
  }
  img {
    width: 0.16rem;
    height: 0.16rem;
  }
}
.bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  .btn {
    height: 0.49rem;
    line-height: 0.49rem;
    background: #007aff;
    color: #fff;
    text-align: center;
    font-size: 17px;
  }
  .lr {
    display: flex;
    align-items: center;
    font-size: 14px;
    a {
      flex: 1;
      height: 0.36rem;
      line-height: 0.36rem;
      text-align: center;
      color: #fff;
      background: #ec5a0f;
    }
    .r {
      opacity: 0.7;
    }
  }
  .dl {
    padding: 0.12rem 0;
  }
  p {
    text-align: center;
    margin: 0;
    font-size: 11px;
    color: #8e8e93;
  }
}
</style>
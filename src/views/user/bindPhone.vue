<template>
  <div class="cont">
    <div class="detail-input">
      <div class="item">
        <img src="../../assets/img/504@2x.png">
        <!-- <text>手机号</text> -->
        <input
          type="number"
          placeholder="手机号"
          pattern="[0-9]*"
          maxlength="6"
          oninput="if(value.length>5)value=value.slice(0,13)"
          v-model="phone"
        >
      </div>
    </div>
    <div class="detail-input">
      <div class="item code">
        <div class="left">
          <img src="../../assets/img/5@2x.png">
          <!-- <text>验证码</text> -->
          <input
            type="number"
            placeholder="验证码"
            pattern="[0-9]*"
            maxlength="6"
            oninput="if(value.length>5)value=value.slice(0,6)"
            v-model="code"
          >
        </div>
        <div class="right">获取验证码</div>
      </div>
    </div>

    <div class="btn" @click="bindMoblie">确定</div>
  </div>
</template>

<script>
import { getApi, postApi } from "@/api";
// import { setMoblie } from "@/api";
export default {
  data() {
    return {
      code: "",
      phone: ""
    };
  },
  methods: {
    bindMoblie() {
      postApi("batchMoblie", {
        openId: this.$global.openId,
        code: this.code,
        phone: this.phone
      }).then(res => {
        this.$router.replace({ name: "user" });
      });
    }
  },
  created() {}
};
</script>

<style scoped lang="less">
.cont {
  //   background: #f1f1f1;
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f1f1f1;
}

.detail-input {
  padding-top: 0.1rem;
  .item {
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 0.15rem;
    font-size: 0.15rem;
    height: 0.49rem;
    line-height: 0.49rem;
    box-sizing: border-box;
  }
  .item img {
    width: 0.24rem;
    height: 0.24rem;
  }
  .item text {
    margin: 0 0.08rem;
  }
  .item input {
    flex: 1;
    height: 0.49rem;
    margin-left: 0.08rem;
  }
  .item .phcolor {
    color: #000;
  }
  .item.code {
    padding: 0;
    background: transparent;
  }
  .item.code .left {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0 0.15rem;
    flex: 1;
    overflow: hidden;
  }
  .item.code .right {
    width: 1.2rem;
    margin-left: 0.15rem;
    border: 0.01rem solid #007aff;
    text-align: center;
    color: #007aff;
  }
}

.btn {
  width: 3.2rem;
  height: 0.49rem;
  text-align: center;
  line-height: 0.49rem;
  background: #007aff;
  color: #fff;
  margin: 0 auto;
  margin-top: 0.4rem;
  font-size: 0.2rem;
}
</style>
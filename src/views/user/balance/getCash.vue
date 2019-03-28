<template>
  <div class="cont">
    <div class="cash-box">
      <div class="cash-top">
        <img src="../../../assets/img/1283@2x.png">
        <span>微信提现</span>
      </div>
      <div class="cash-cont">
        <div class="box1">
          <div class="text">提现现金</div>
          <div class="cash-or-input">
            <span>￥</span>
            <input
              type="number"
              pattern="[0-9]*"
              v-model="cashVal"
              oninput="if(value.length>5)value=value.slice(0,11)"
            >
            <!-- <input type="number" maxlength="11" v-model="cashVal" bindinput="getCashVal"> -->
          </div>
          <div class="text2">
            当前余额{{balance}}元，
            <span style="color:#007AFF;" @click="cashVal = balance">全部提现</span>
          </div>
        </div>
        <div :class="[{'active':cashVal>0},'btn']" @click="cash">提现</div>
        <div class="tip">
          <img src="../../../assets/img/checkmark@2x.png">
          <span>温馨提示：绑定手机号后即可提现哦~</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getApi, postApi } from "@/api";
export default {
  data() {
    return {
      cashVal: "",
      balance: this.$global.userInfo.balance
    };
  },
  methods: {
    cash() {
      if (!this.$global.userInfo.phone) {
        this.$messagebox.confirm("请前往绑定手机号即可提现").then(() => {
          this.$router.push({ path: "/user/bindPhone" });
        });
        return;
      }
      if (this.cashVal > 0) {
        postApi("cash", {
          openId: this.$global.openId,
          money: this.cashVal
        }).then(res => {
          this.$toast({ message: res.msg, duration: 1000 });
          setTimeout(() => {
            this.$router.go(-2);
          }, 1000);
        });
      }
      // this.$router.replace({ name: "user" });
    }
  }
};
</script>

<style scoped lang="less">
.cont {
  background: #f1f1f1;
  position: absolute;
  height: 100%;
}
.cash-box {
  margin: 0.5rem 0.15rem 0;
  .cash-top {
    height: 0.56rem;
    background: #f8f8f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
    img {
      width: 0.36rem;
      height: 0.36rem;
      border-radius: 50%;
    }
    span {
      font-size: 0.15rem;
    }
  }
  .cash-cont {
    background: #fff;
    padding-bottom: 0.2rem;
    .box1 {
      padding: 0.32rem 0.2rem;
    }
    .cash-or-input {
      display: flex;
      padding: 0.08rem 0;
      border-bottom: 0.01rem solid #d1d1d6;
      align-items: center;
      span {
        font-size: 0.24rem;
        margin-right: 0.04rem;
        font-weight: 600;
      }
      input {
        flex: 1;
        font-size: 0.3rem;
        font-weight: 600;
        margin: 0;
        border: none;
        height: auto;
        padding: 0;
      }
    }
    .btn {
      width: 3.2rem;
      height: 0.49rem;
      background: #7ebbff;
      box-shadow: 0rem 0.08rem 0.15rem rgba(0, 122, 255, 0.26);
      border-radius: 0.08rem;
      margin: 0 auto;
      text-align: center;
      line-height: 0.49rem;
      color: #fff;
      font-size: 0.2rem;
      &.active {
        background: #007aff;
      }
    }
    .tip {
      text-align: center;
      font-size: 0.11rem;
      color: #007aff;
      margin-top: 0.08rem;
      img {
        width: 0.12rem;
        height: 0.12rem;
        margin-right: 0.04rem;
      }
      span {
        font-size: 0.12rem;
      }
    }
  }
  .box1 .text2 {
    margin-top: 0.08rem;
  }
}
</style>
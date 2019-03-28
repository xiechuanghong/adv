<template>
  <div class="footer">
    <div class="place"></div>
    <div class="footer-btm">
      <div
        class="box"
        v-for="(item,index) in items"
        :key="index"
        @click="onItemTap(item.push,index)"
      >
        <img v-bind:src="index===$store.getters.getTabCurI?item.iconSelect:item.icon">
        <div :class="['colorChange',{on:index===$store.getters.getTabCurI}]">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          cls: "home",
          name: "首页",
          push: "/home",
          icon: require("../assets/img/tab/ic_home_nor.png"),
          iconSelect: require("../assets/img/tab/ic_home_pre.png")
        },
        {
          cls: "mission",
          name: "任务大厅",
          push: "/missionList",
          icon: require("../assets/img/tab/ic_mis_nor.png"),
          iconSelect: require("../assets/img/tab/ic_mis_pre.png")
        },
        {
          cla: "shop",
          name: "商城",
          push: "/shop",
          icon: require("../assets/img/tab/ic_shop_nor.png"),
          iconSelect: require("../assets/img/tab/ic_shop_pre.png")
        },
        {
          cla: "user",
          name: "个人中心",
          push: "/user",
          icon: require("../assets/img/tab/ic_user_nor.png"),
          iconSelect: require("../assets/img/tab/ic_user_pre.png")
        }
      ]
    };
  },
  methods: {
    // 点击切换底部tabbar
    onItemTap(rt, index) {
      this.$store.commit("upTabCurI", index);
      this.$router.replace(rt);
    }
  }
};
</script>
<style scoped lang="less">
.place {
  height: 0.5rem;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.footer-btm {
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  display: flex;
  height: 0.5rem;
  align-items: center;
  background: #f8f8f8;
  .box {
    width: 25%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 0.24rem;
    height: 0.24rem;
  }
  .colorChange {
    font-size: 0.1rem;
    color: #007aff;
    font-family: SF Pro Text;
    font-weight: 500;
  }
}
</style>

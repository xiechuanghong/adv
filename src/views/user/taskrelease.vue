<template>
  <div class="cont">
    <div class="title">
      <span>文本信息来源</span>
      <div @click="onClick('url')">
        <span :class="[{'active' : $route.name=='url'},'mint-radio-core']"></span>
        <span>发布链接</span>
      </div>
      <div @click="onClick('text')">
        <span :class="[{'active' : $route.name=='text'},'mint-radio-core']"></span>
        <span>发布文本</span>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClick(val) {
      this.$router.replace({ name: val });
    }
  },
  created() {
    // this.$route.meta.keepAlive = true;
  }
};
</script>

<style scoped lang="less">
.mint-radio-core {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  background-color: #fff;
  border-radius: 100%;
  border: 1px solid #4dd963;
  position: relative;
  width: 0.15rem;
  height: 0.15rem;
  vertical-align: middle;
}

.mint-radio-core.active {
  background-color: #4dd963;
  border-color: #4dd963;
}

.mint-radio-core::after {
  content: " ";
  border-radius: 100%;
  top: 0.03rem;
  left: 0.03rem;
  position: absolute;
  width: 0.07rem;
  height: 0.07rem;
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  -webkit-transform: scale(0);
  transform: scale(0);
  background-color: #fff;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.cont {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f1f1f1;
}

.title {
  display: flex;
  height: 0.5rem;
  align-items: center;
  background: #fff;
  margin-bottom: 0.1rem;
  padding: 0 0.15rem;
  padding-right: 0.32rem;
  justify-content: space-between;
}
</style>
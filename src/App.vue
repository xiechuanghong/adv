<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
    <app-footer v-if="footShow"></app-footer>
  </div>
</template>

<script>
import appFooter from "./components/footer.vue";
export default {
  data() {
    return {
      footShow: true
    };
  },
  name: "App",
  components: {
    appFooter
  },
  watch: {
    $route: {
      handler: function(to, oldVal) {
        if (
          to.name === "home" ||
          to.name === "mission" ||
          to.name === "shop" ||
          to.name === "user"
        ) {
          this.footShow = true;
        } else {
          this.footShow = false;
        }
      },
      // 深度观察监听
      deep: true
    }
  }
};
</script>

<style>
/* * {
  padding: 0;
  margin: 0;
} */
#app {
  height: 100%;
}
[v-cloak] {
  display: none !important;
}
</style>

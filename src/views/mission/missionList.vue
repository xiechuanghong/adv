<template>
  <div
    class="cont"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="0"
  >
    <mt-swipe :show-indicators="false">
      <mt-swipe-item v-for="(item,index) in banner" :key="index">
        <img class="ban" :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <div class="tab-content">
      <router-link :to="{ path:'/missionDetail' }" v-for="(item,index) in list.task" :key="index">
        <div class="list">
          <img :src="item.avatarUrl">
          <div class="list-cont">
            <div class="title">{{item.title}}</div>
            <div class="je">赏金{{item.price}}元/次</div>
            <div>已有{{item.isReadNum}}人进行分享任务</div>
          </div>
        </div>
      </router-link>
      <div v-if="list.task.length == 0" style="text-align:center;">没有更多数据了~</div>
    </div>
  </div>
</template>

<script>
import { getApi, postApi } from "@/api";
export default {
  data() {
    return {
      list: {
        task: []
      },
      loading: true,
      banner: []
    };
  },
  methods: {
    // 获取任务大厅列表
    getTaskList(from) {
      getApi("taskList", {
        address: "番禺区",
        type: "1001",
        from: from,
        size: 10
      }).then(res => {
        this.list.task.push(...res.data.task);
        this.list.from = res.data.from;
        this.list.pageCount = res.data.pageCount;
        this.loading = false;
      });
    },
    // 获取轮播图数据
    getCarousel() {
      getApi("carousel", {}).then(res => {
        this.banner = res.data;
      });
    },
    loadMore() {
      if (this.list.from >= this.list.pageCount) {
        this.$toast("没有更多数据了~~");
        // this.loading = true;
        return;
      }
      this.getTaskList(++this.list.from);
    }
  },
  created() {
    Promise.all([this.getTaskList(1), this.getCarousel()]);
  },
  watch: {
    $route: {
      handler: function(to, oldVal) {
        console.log(to);
        if (to.name == "mission") {
          this.loading = false;
        } else {
          this.loading = true;
        }
      },
      // 深度观察监听
      deep: true
    }
  }
};
</script>

<style scoped lang="less">
.cont {
  padding-bottom: 0.5rem;
}
.mint-swipe {
  height: 1.4rem;
}
.banner {
  height: 1.4rem;
}

.ban {
  width: 100%;
  // height: 100%;
  height: 1.4rem;
}

.tab-content {
  .list {
    padding: 0.12rem 0.15rem 0.14rem;
    display: flex;
    border-bottom: 0.01rem solid #eee;
    position: relative;
    button {
      position: absolute;
      right: 0.15rem;
      top: 0.2rem;
    }
    .btn {
      width: 0.96rem;
      height: 0.4rem;
      border-radius: 0.2rem;
      border: 0.01rem solid #007aff;
      text-align: center;
      line-height: 0.4rem;
      color: #007aff;
    }
    img {
      width: 0.72rem;
      height: 0.72rem;
      border-radius: 50%;
      margin-right: 0.08rem;
    }
    .list-cont {
      flex: 1;
      color: #6b6b6b;
    }
    .list-cont .title {
      margin-bottom: 0.1rem;
      font-size: 0.14rem;
      font-weight: 600;
      color: #000;
    }
    .list-cont .je {
      margin-bottom: 0.04rem;
    }
  }
}
</style>
<template>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
    <div class="tab-title">
      <div
        :class="[{'active':currentTab == index},'item']"
        v-for="(item,index) in tabTitleData"
        :key="index"
        @click="currentTab = index"
      >{{item}}</div>
    </div>
    <div class="tab-cont">
      <router-link
        :to="{ path:'/taskManageDetail',query:{ id:item.id } }"
        v-for="(item,index) in list.task"
        :key="index"
      >
        <div class="list">
          <img class="avatar-logo" :src="item.photo">
          <div class="list-cont">
            <div class="title">{{item.title}}</div>
            <div class="je">赏金{{item.price}}/次</div>
            <div class="taskNum">已有{{item.isReadNum}}人进行分享任务，剩{{item.readNum - item.isReadNum}}个任务</div>
          </div>
          <div v-if="currentTab == 0">
            <div v-if="item.state == 1001" class="state" style="color:#FF9500">审核中</div>
            <div v-if="item.state == 1002" class="state" style="color:#007AFF">已发布</div>
            <div v-if="item.state == 1003" class="state" style="color:#4CD964">已完成</div>
            <div v-if="item.state == 1004" class="state" style="color:#FF3B30">审核失败</div>
          </div>
        </div>
      </router-link>
      <div v-if="list.from == list.pageCount" style="text-align:center;">没有更多数据~</div>
    </div>
  </div>
</template>

<script>
import { getApi, postApi } from "@/api";
export default {
  data() {
    return {
      tabTitleData: ["全部", "审核中", "已发布", "已完成", "审核失败"],
      list: {
        task: []
      },
      loading: true,
      currentTab: 0
    };
  },
  watch: {
    currentTab(newVal, oldVal) {
      this.list.task = [];
      this.getTaskview(1);
    }
  },
  methods: {
    // 获取任务管理列表
    getTaskview(form) {
      getApi("task/taskview", {
        openId: this.$global.openId,
        taskType: this.$route.query.taskType,
        state: this.currentTab,
        from: form,
        size: 10
      }).then(res => {
        this.list.task.push(...res.data.task);
        this.list.from = res.data.from;
        this.list.pageCount = res.data.pageCount;
        this.loading = false;
      });
    },
    loadMore() {
      if (this.list.from >= this.list.pageCount) {
        this.$toast("没有更多数据了~~");
        this.loading = true;
        return;
      } else if (this.list.task.length > 0) {
        this.getTaskview(++this.list.from);
      }
      console.log("到底部了");
    }
  },
  created() {
    this.getTaskview(0);
  },
  mounted() {}
};
</script>

<style scoped lang="less">
.tab-title {
  line-height: 0.39rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.1rem solid #ececec;
  background: #fff;
  .item {
    color: #707074;
    font-size: 0.15rem;
  }
  .item.active {
    font-size: 0.15rem;
    font-weight: 600;
    color: #007aff;
    position: relative;
    display: flex;
    justify-content: center;
    &::before {
      position: absolute;
      content: "";
      bottom: 0;
      width: 0.18rem;
      height: 0.02rem;
      background: #0071ff;
    }
  }
}

.tab-cont {
  background: #fff;
  .list {
    padding: 0.13rem 0.15rem;
    border-bottom: 0.01rem solid #eee;
    display: flex;
    position: relative;
  }
  .list .avatar-logo {
    width: 0.72rem;
    height: 0.72rem;
    border-radius: 50%;
    margin-right: 0.08rem;
  }
  .list-cont {
    flex: 1;
    color: #6b6b6b;
    overflow: hidden;
  }
  .list-cont .title {
    margin-bottom: 0.1rem;
    font-size: 0.14rem;
    font-weight: 600;
    color: #000;
  }
  .list-cont .taskNum {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .list .state {
    position: absolute;
    right: 0.15rem;
    top: 0.12rem;
  }
}
</style>
<template>
  <div>
    <router-link :to="{ name:'addurl' }">
      <div class="detail-item bt-line">
        <span>链接</span>
        <div class="rh">
          <span>{{taskDetail.url}}</span>
          <img src="../../../assets/img/ic_405@2x.png">
        </div>
      </div>
    </router-link>
    <router-link :to="{ name:'addimage' }">
      <div class="detail-item bt-line">
        <span>图片</span>
        <div class="rh">
          <span>广告图</span>
          <img src="../../../assets/img/ic_405@2x.png">
        </div>
      </div>
    </router-link>
    <div class="detail-box">
      <div class="detail-item">
        <span>商户名字</span>
        <span>{{taskDetail.name}}</span>
      </div>
      <div class="detail-item">
        <span>广告标语</span>
        <span>{{taskDetail.title}}</span>
      </div>
      <div class="detail-item">
        <span>广告分享个数</span>
        <span>{{taskDetail.readNum}}</span>
      </div>
      <div class="detail-item">
        <span>单个分享金额</span>
        <span>{{taskDetail.price}}元</span>
      </div>
      <div class="detail-item">
        <span>总金额</span>
        <span>{{taskDetail.total}}元</span>
      </div>
      <div class="detail-item">
        <span>位置/范围</span>
        <span>{{taskDetail.address}}</span>
      </div>
      <div class="detail-item">
        <span>广告发布时间</span>
        <span>{{taskDetail.publishTime | date}}</span>
      </div>
    </div>

    <div class="detail-item bt-line-pd">
      <span class="title">小区人群</span>
    </div>

    <div class="detail-item bt-line">
      <span>***区：</span>
      <span>300人</span>
    </div>
    <div class="detail-item bt-line">
      <span>***区：</span>
      <span>300人</span>
    </div>
    <div class="detail-item bt-line">
      <span>***区：</span>
      <span>300人</span>
    </div>
  </div>
</template>

<script>
import { getTaskDetail } from "@/api";
export default {
  data() {
    return {
      taskDetail: {}
    };
  },
  methods: {
    // 获取任务详情
    getTaskDetails() {
      getApi("taskDetails", {
        id: this.$route.query.id
      }).then(res => {
        this.taskDetail = res.data;
      });
    }
  },
  created() {
    this.getTaskDetails();
  }
};
</script>
<style scoped lang="less">
a {
  color: #000;
}
.detail-box,
.detail-item {
  background: #fff;
}
.detail-item {
  font-size: 0.15rem;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  padding: 0.07rem 0.15rem;
}

.detail-item.bt-line {
  padding-top: 0.14rem;
  padding-bottom: 0.14rem;
  border-bottom: 0.01rem solid #eee;
}

.detail-item.bt-line-pd {
  padding-top: 0.16rem;
  padding-bottom: 0.2rem;
  border-bottom: 0.01rem solid #eee;
}

.detail-item.bt-line-pd .title {
  font-size: 0.17rem;
  font-weight: 600;
}

.detail-box {
  padding: 0.07rem 0;
  border-bottom: 0.1rem solid #ececec;
}

.detail-item .rh {
  display: flex;
  align-items: center;
}

.detail-item .rh span {
  margin-right: 0.04rem;
}

.detail-item .rh img {
  width: 0.12rem;
  height: 0.12rem;
}
</style>
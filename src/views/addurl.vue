<template>
  <div>
    <div class="detail top">链接内容：</div>
    <div class="detail text">
      <textarea maxlength="-1" focus autofocus v-model="textAreaVal" ref="textarea"></textarea>
    </div>
    <div class="bottom-btn">
      <div class="zw"></div>
      <div class="btn" @click="addUrl" style="margin-right:48rem;">
        <span>确认添加</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textAreaVal: ""
    };
  },
  methods: {
    addUrl() {
      this.$store.state[this.$route.params.url] = this.textAreaVal;
      // this.$global.addUrl1 = this.textAreaVal;
      this.$router.go(-1);
    }
  },
  created() {
    // this.textAreaVal = this.$global.addUrl1 || "";
    this.textAreaVal = this.$store.state[this.$route.params.url];
  },
  mounted() {
    this.$refs.textarea.focus();
  }
};
</script>

<style scoped lang="less">
.zw {
  height: 0.49rem;
}
.bottom-btn {
  display: flex;
  margin-top: 0.24rem;
  margin-left: 0.15rem;
}

.bottom-btn .btn {
  height: 0.49rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #007aff;
  font-size: 0.2rem;
  color: #fff;
  border-radius: 0.04rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.detail {
  padding: 0 0.15rem;
}

.detail.top {
  background: #fff;
  height: 0.57rem;
  line-height: 0.57rem;
  border-bottom: 0.1rem solid #f1f1f1;
}

.detail.text {
  background: #fff;
}

.detail.text textarea {
  border: none;
  margin-top: 0.1rem;
  width: 100%;
  /* border: 1rem solid #eee; */
  font-size: 0.13rem;
  color: #707074;
}
</style>
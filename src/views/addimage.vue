<template>
  <div class="cont">
    <div class="detail top">图片内容：</div>
    <div class="detail add-img">
      <div class="add-box btn">
        <input type="file" @change="onUpImg">
      </div>
      <div class="add-box item" v-for="(item,index) in imgArr" :key="index">
        <img class="img" :src="item">
        <img @click="onDelImg(index)" class="del" src="../assets/img/ic_closed_oval_gray_16.png">
      </div>
    </div>
    <div class="bottom-btn">
      <div class="zw"></div>
      <div class="btn" @click="addImage" style="margin-right:48rem;">
        <span>确认添加</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getApi, postApi } from "@/api";
import axios from "axios";

export default {
  data() {
    return {
      imgArr: []
    };
  },
  methods: {
    // 上传图片
    onUpImg(e) {
      let imgStr = /\.(jpg|jpeg|png|bmp|BMP|JPG|PNG|JPEG)$/;
      let formData = new FormData();
      if (!imgStr.test(e.target.files[0].name)) {
        this.$toast("文件不是图片类型");
        e.target.value = "";
        return false;
      }
      formData.append("file", e.target.files[0]);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      axios.post("file", formData, config).then(res => {
        // this.imgArr.push(res.data.data);
        this.$global.imgArr.push(res.data.data);

        // this.$store.state.imgArr1.push(res.data.data);
        e.target.value = "";
      });
    },
    // 删除图片
    onDelImg(i) {
      this.$global.imgArr.splice(i, 1);

      // this.$store.state.imgArr1.splice(i, 1);
      console.log("这是删除按钮", i);
    },
    addImage() {
      this.$router.go(-1);
    }
  },
  created() {
    this.imgArr = this.$global.imgArr || [];

    console.log(this.imgArr);
  }
};
</script>

<style scoped lang="less">
/* pages/addurl/addurl.wxss */
.btn {
}

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

.btn input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer;
}

.detail {
  padding: 0 0.15rem;
  &.top {
    height: 0.57rem;
    //   line-height: 0.57rem;
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid #f1f1f1;
  }
  &.text textarea {
    margin-top: 0.1rem;
    width: 100%;
    /* border: 1rem solid #eee; */
    font-size: 0.13rem;
    color: #707074;
  }
  &.add-img {
    padding-top: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    padding-right: 0;
  }
}

.add-box {
  width: 0.98rem;
  height: 0.98rem;
  border-radius: 0.04rem;
  margin-right: 0.2rem;
  margin-bottom: 0.2rem;
  position: relative;
  &.btn {
    position: relative;
    background: #e5e5ea;
  }
  &.btn::after {
    position: absolute;
    top: 0.48rem;
    left: 0.25rem;
    width: 0.48rem;
    height: 0.02rem;
    background: #8e8e93;
    content: "";
  }
  &.btn::before {
    position: absolute;
    top: 0.25rem;
    left: 0.48rem;
    width: 0.02rem;
    height: 0.48rem;
    background: #8e8e93;
    content: "";
  }
  &.item .img {
    width: 100%;
    height: 100%;
  }
  &.item .del {
    position: absolute;
    width: 0.24rem;
    height: 0.24rem;
    right: -0.1rem;
    top: -0.1rem;
  }
}
</style>
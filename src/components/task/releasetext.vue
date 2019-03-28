<template>
  <div class="tab-cont">
    <form @submit.prevent="onSubmit" onkeydown="if(event.keyCode==13){return false;}">
      <!-- <router-link :to="{name:'addurl',params:{ url:'url2' }}">
        <div class="detail-item">
          <span>添加链接</span>
          <div class="right">
            <input
              :value="$global.addUrl ? $global.addUrl :''"
              disabled="true"
              placeholder="请添加所需要转发的链接"
            >
            <img class="tz" src="../../assets/img/ic_405@2x.png">
          </div>
        </div>
      </router-link>-->
      <router-link :to="{name:'file'}">
        <div class="detail-item">
          <span>添加文档</span>
          <div class="right">
            <input
              :value="$store.state.file === 'true' ? '已添加文档' :''"
              disabled="true"
              placeholder="请添加所需要阅读的文档"
            >
            <img class="tz" src="../../assets/img/ic_405@2x.png">
          </div>
        </div>
      </router-link>
      <router-link :to="{name:'addimage'}">
        <div class="detail-item">
          <span>添加图片</span>
          <div class="right">
            <input
              :value="$global.imgArr.length > 0 ? '添加图片':''"
              disabled="true"
              placeholder="请添加所需要的图片"
            >
            <img class="tz" src="../../assets/img/ic_405@2x.png">
          </div>
        </div>
      </router-link>
      <div class="detail-item">
        <span>商户名字</span>
        <input name="name" v-model="fromData.name" placeholder="请填写商户名字">
      </div>
      <div class="detail-item">
        <span>广告标语</span>
        <input name="title" v-model="fromData.title" placeholder="请填写广告标语">
      </div>
      <div class="detail-item">
        <span>广告阅读个数</span>
        <input
          type="number"
          pattern="[0-9]*"
          name="readNum"
          placeholder="500个以上"
          v-model="fromData.ydNum"
          oninput="if(value.length>5)value=value.slice(0,11)"
        >
      </div>
      <div class="detail-item">
        <span>阅读/次</span>
        <span>0.1元</span>
      </div>
      <div class="detail-item">
        <span>总金额</span>
        <span>{{ydSum}}</span>
      </div>
      <div class="detail-item" @click="openPicker">
        <span>发布时间</span>
        <div class="right">
          <input v-model="dateTime" disabled="true" placeholder="请选择发布时间">
          <img class="tz" src="../../assets/img/ic_405@2x.png">
        </div>
      </div>
      <div class="detail-box">
        <div class="detail-item">
          <span>分享任务</span>
          <mt-switch v-model="shareSwitch"></mt-switch>
        </div>
        <div v-if="shareSwitch">
          <div class="detail-item">
            <span>广告分享个数</span>
            <input
              type="number"
              pattern="[0-9]*"
              oninput="if(value.length>5)value=value.slice(0,11)"
              v-model="fromData.shareNum"
              name="readNum"
              placeholder="500个以上"
            >
          </div>
          <div class="detail-item">
            <span>单个分享</span>
            <span>0.2元</span>
          </div>
          <div class="detail-item">
            <span>总金额</span>
            <span>{{shareSum}}</span>
          </div>
        </div>
      </div>
      <div class="detail-box">
        <div class="detail-item">
          <span>广告位</span>
          <mt-switch v-model="bannerSwitch"></mt-switch>
        </div>
        <div v-if="bannerSwitch">
          <div class="detail-item">
            <span>添加图片</span>
            <div class="right">
              <input :value="''" disabled="true" placeholder="请添加一张图片">
              <img class="tz" src="../../assets/img/ic_405@2x.png">
            </div>
          </div>
          <div class="detail-item">
            <span>购买商品</span>
            <input
              type="number"
              pattern="[0-9]*"
              oninput="if(value.length>5)value=value.slice(0,11)"
              v-model="fromData.goodsNum"
              name="readNum"
              placeholder="50个以上"
            >
          </div>
          <div class="detail-item">
            <span>单个商品</span>
            <span>1元</span>
          </div>
          <div class="detail-item">
            <span>总金额</span>
            <span>{{goodsSum}}</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="check">
          <!-- <checkbox-group bindchange="checkboxChange">
                <checkbox color="blue"></checkbox>
          </checkbox-group>-->
          <div class="mui-input-row mui-checkbox mui-left">
            <label for="checkBox">
              我已同意
              <!-- <span style="color:#007AFF"> -->
              <a @click.prevent="popupVisible = true" style="color:#007aFF">《发布广告用户协议》</a>
              <!-- <router-link :to="{ name:'agree' }" style="color:#007AFF">《发布广告用户协议》</router-link> -->
              <!-- </span> -->
            </label>
            <input id="checkBox" name="checkbox1" value="Item 1" v-model="check" type="checkbox">
          </div>
          <!-- <input type="checkbox" value> -->
          <!-- <span>我已同意</span>
          <span style="color:#007AFF">《发布广告用户协议》</span>-->
        </div>
        <button form-type="submit" :class="{'active':check}">确认发布</button>
      </div>
      <mt-datetime-picker
        ref="picker"
        type="date"
        v-model="pickerValue"
        @confirm="cancelText"
        @cancel="checkinCancel"
        :startDate="startDate"
      ></mt-datetime-picker>
    </form>

    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
      <div class="popup">
        <p style="text-align:center;">用户协议</p>
        <p>根据中国人民XXXXXX协议：您螺丝钉咖啡碱了微软金额为老人空间为欧提u的风格可交换的风格吗Bret看寒热交替空间的风格看见对方</p>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromData: {
        title: "",
        name: "",
        ydNum: "",
        shareNum: "",
        goodsNum: ""
      },
      check: false,
      shareSwitch: false,
      bannerSwitch: false,
      shareNum: "",
      pickerValue: "",
      startDate: new Date(),
      dateTime: "",
      popupVisible: false
    };
  },
  computed: {
    shareSum() {
      if (this.fromData.shareNum == "" || this.fromData.shareNum < 500) {
        return "";
      }
      return this.fromData.shareNum * 1;
    },
    ydSum() {
      if (this.fromData.ydNum == "" || this.fromData.ydNum < 500) {
        return "";
      }
      return this.fromData.ydNum * 0.1;
    },
    goodsSum() {
      if (this.fromData.goodsNum == "" || this.fromData.goodsNum < 50) {
        return "";
      }
      return this.fromData.goodsNum * 1;
    }
  },
  methods: {
    openPicker() {
      this.$refs.picker.open();
    },
    cancelText(e) {
      let time = this.$moment(e).format("YYYY-MM-DD");
      this.dateTime = time;
      console.log("点击了确定", time);
    },
    checkinCancel() {
      this.$refs.picker.close();
      console.log("点击了取消");
    },
    // 表单提交
    onSubmit(e) {
      if (this.check == false) {
        return false;
      }
      if (!this.$route.params.file) {
        this.$toast("请添加文档");
        return;
      }
      this.fromData.shareSum = this.shareSum;
      this.fromData.ydSum = this.ydSum;
      // this.fromData.img = this.$global.imgArr.toString();
      console.log(this.fromData);
      for (let i in this.fromData) {
        if (!this.fromData[i]) {
          this.$toast("请填写完毕");
          return;
        }
      }
      console.log(this.fromData, "发送请求跳转页面~");
    }
  },
  mounted() {
    // console.log(this.$route);
    // this.fromData = this.$global.from2 || this.fromData;
  }
  // beforeRouteLeave(to, from, next) {
  //   this.$global.from2 = this.fromData;
  //   console.log(this.$global.from);
  //   next();
  // }
};
</script>

<style scoped lang="less">
.xy-pop {
  width: 85%;
  padding: 15px;
}
.xy-pop p {
  font-size: 12px;
}
.mint-switch .mint-switch-input:checked + .mint-switch-core {
  border-color: red !important;
  background-color: red !important;
}

.cont {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f1f1f1;
}

.mui-radio input[type="radio"]:before,
.mui-checkbox input[type="checkbox"]:before {
  color: #007aff;
}

.mui-radio.mui-left label,
.mui-checkbox.mui-left label {
  padding-left: 0.72rem;
}

.mui-radio.mui-left input[type="radio"],
.mui-checkbox.mui-left input[type="checkbox"] {
  left: 0.4rem;
}

a {
  color: #000;
}

.tab-cont {
  background: #fff;
}

.tab-cont .detail-box {
  border-top: 0.1rem solid #ececec;
}

.tab-cont .detail-item {
  border-bottom: 0.01rem solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.13rem 0.15rem;
}

.tab-cont .detail-item .tz {
  width: 0.12rem;
  height: 0.12rem;
  margin-left: 0.04rem;
}

.tab-cont .detail-item .right {
  display: flex;
  align-items: center;
}

.tab-cont .detail-item input {
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: #fff;
  color: #000;
  flex: 1;
  font-size: 0.15rem;
}

.bottom {
  //   position: fixed;
  //   bottom: 0;
  //   width: 100%;
  /* margin-top: 60rem; */
  padding-top: 0.3rem;
  background: #f1f1f1;
}

.bottom .check {
  display: flex;
  align-items: center;
  color: #8e8e93;
  font-size: 0.12rem;
  margin-bottom: 0.08rem;
}

.bottom .check checkbox {
  margin: 0 0.16rem 0 0.4rem;
}

.bottom .check text {
  margin-top: 0.02rem;
}

.bottom button {
  height: 0.49rem;
  //   line-height: 0.49rem;
  display: block;
  color: #fff;
  background: #77b5f8;
  border-radius: 0;
  font-size: 0.2rem;
  width: 100%;
  border: none;
}

/* .bottom .btn {
  background: #77b5f8;
  height: 98rem;
  text-align: center;
  line-height: 98rem;
  font-size: 40rem;
  color: #fff;
} */

.bottom button.active {
  background: #007aff;
}
</style>
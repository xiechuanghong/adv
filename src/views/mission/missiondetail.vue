<template>
  <div>
    <div class="detail top">
      <img class="avatar" src="../../assets/img/u=604482600,1393215599&fm=26&gp=0.jpg">
      <div class="right">
        <span class="title">123123</span>
        <div class="sum-box">
          <div class="sum-text">总赏金</div>
          <span class="sum">￥123元</span>
        </div>
      </div>
    </div>

    <div class="detail content">
      <div v-if="false">
        <a
          href="https://mp.weixin.qq.com/s?__biz=MzI2Mzk4NjA1MQ==&mid=2247484172&idx=1&sn=18c3459498a91945d7bcf65ec86619f3&chksm=eab2cde0ddc544f6daa7eab8fc7af6df5e6cf083a005a4194ab5376046cd99525df877a0bc4e&mpshare=1&scene=1&srcid=&key=4b039969817453f5417da2c02b7b5f1c0fdc0854769e8521e7afffc956b1ed3741793fa04cbb2f0710406cb530f368d8ab624b82e35b1e4230037f4c7fcd649186e9c79020f0685636efd65e745abf74&ascene=1&uin=NTcxMjkwMzY4&devicetype=Windows+10&version=62060728&lang=zh_CN&pass_ticket=MhHDnsbe5qfYQQa7MgUH5wVJimHbB0KZpS6kA1tNKXIw4bjVvx3ecIMUCvVtvDmF"
        >
          <div class="at">
            <div class="title">广州酷抓微链信息科技有限公司（以下简称酷抓微链）</div>
            <p class="text">
              广州酷抓微链信息科技有限公司（以下简称酷抓微链）
              成立于2011年，酷抓微链长期专注于自助售卖领域，是
              一家专业提供无人零售的软硬件综合方案
            </p>
          </div>
        </a>

        <img class="urlImg" src="../../assets/img/ic_503@2x.png" alt>
      </div>
      <div v-if="true">
        <img class="urlImg" src="../../assets/img/u=604482600,1393215599&fm=26&gp=0.jpg" alt>
        <p>
          广州酷抓微链信息科技有限公司（以下简称酷抓微链）
          成立于2011年，酷抓微链长期专注于自助售卖领域，是
          一家专业提供无人零售的软硬件综合方案服务，涵盖新
          零售物联网综合解决方案，商业零售大数据综合性高科
          技企业，是江苏工业大学校企科研合作企业。
        </p>
        <p class="gg">广告</p>
        <img class="gg-img" src="../../assets/img/u=604482600,1393215599&fm=26&gp=0.jpg" alt>
      </div>
    </div>

    <div class="detail bottom">
      <div class="item">广 告 赏 金 ：赏金123元/次</div>
      <div class="item">广 告 余 量 ：已有123人阅读了任务，剩余123个任务</div>
      <div class="item">广告创建时间：123</div>
      <div class="btn">
        <img src="../../assets/img/658@2x.png" alt>
        <span>分享至微信群就能领赏金哦~</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 100%;
}

.gg-img {
  height: 1.2rem;
}

.gg {
  text-align: center;
  position: relative;
  color: #8e8e93;
  margin-top: 20px;
}
.gg::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.11rem;
  width: 1.36rem;
  border: dashed #8e8e93 0.01rem;
}
.gg::after {
  content: "";
  position: absolute;
  right: 0;

  top: 0.11rem;
  width: 1.36rem;
  border: dashed #8e8e93 0.01rem;
}

.at {
  padding: 0.14rem;
  background: #ececec;
  border-radius: 8px;
  margin-bottom: 10px;
}

.at .title {
  font-size: 0.16rem;
  font-family: PingFang SC;
  font-weight: 600;
  color: #000;
}

.at .text {
  font-size: 0.13rem;
  color: #333333;
  margin: 0;
}

.urlImg {
  width: 100%;
}

.detail {
  padding: 0 0.15rem;
  border-bottom: 0.1rem solid #ececec;
}

.detail.top {
  height: 0.86rem;
  display: flex;
  align-items: center;
}

.detail.top .avatar {
  width: 0.56rem;
  height: 0.56rem;
  border-radius: 50%;
}

.detail.top .right {
  margin-left: 0.08rem;
}

.detail.top .right .title {
  font-size: 0.15rem;
  color: #000;
  font-weight: 600;
}

.detail.top .right .sum-box {
  display: flex;
  align-items: center;
  margin-top: 0.11rem;
}

.detail.top .right .sum-text {
  font-size: 0.12rem;
  color: #ff9500;
  background: #ffe9cb;
  border-radius: 0.08rem;
  padding: 0.04rem 0.06rem 0.03rem 0.06rem;
  margin-right: 0.12rem;
}

.detail.top .right .sum {
  font-size: 0.14rem;
  color: #ff9500;
  font-weight: 600;
}

.detail.content {
  font-size: 0.14rem;
  padding: 0.1rem 0.15rem;
}

/* .detail.content text {
  margin: 0.08rem 0;
  display: block;
}

.detail.content img {
  width: 100%;
} */

.detail.bottom {
  border: none;
  padding-top: 0.1rem;
  padding-bottom: 0.5rem;
  font-size: 0.14rem;
}

.detail.bottom .item {
  margin-bottom: 0.1rem;
  font-size: 0.14rem;
}

.detail.bottom .btn {
  width: 3.45rem;
  height: 0.49rem;
  box-shadow: 0rem 0.08rem 0.15rem rgba(0, 122, 255, 0.26);
  border-radius: 0.25rem;
  background: #007aff;
  font-size: 0.17rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
  line-height: 0.49rem;
  margin: 0 auto;
  margin-top: 0.34rem;
  /* position: fixed; */
  /* bottom: 0.1rem; */
  /* left: 0.28rem; */
}

.detail.bottom .btn img {
  width: 0.24rem;
  height: 0.24rem;
  margin-right: 0.08rem;
}
</style>
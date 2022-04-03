<template>
  <div id="annoy-reg-new">
    <div class="wrapper">
      <div class="login">
        <loginBox></loginBox>
      </div>
      <div class="app">
        <p class="app-title">
          豆瓣
          <span>7.0</span>
        </p>
        <div class="qr">
          <div class="loadDB">
            <a href="#">下载豆瓣</a>
          </div>
          <div class="app-qr" @mouseover="mouseover" @mouseout="mouseout"></div>
        </div>
      </div>
      <div class="app-qr-expend" ref="expend">
        <img src="~assets/img/home/doubanapp_qrcode.png" alt="" />
        <p>ios/Android扫码直接下载</p>
      </div>
    </div>
  </div>
</template>
<script>
import loginBox from "@/components/common/loginBox.vue";

export default {
  name: "RegNew",
  components: {
    loginBox,
  },
  methods: {
    mouseover() {
      this.$refs.expend.style.display = "block";
    },
    mouseout() {
      this.$refs.expend.style.display = "none";
    },
  },
};
</script>
<style scoped>
#annoy-reg-new {
  height: 304px;
  margin-top: 30px;
  background-color: #edf4ec;

  /* background-color: red; */
}
.wrapper {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 1150px;
  height: 304px;
  margin-left: 60px;
  background: url(~assets/img/home/1771365ca98ig9er706.jpg) no-repeat;
  background-size: 691px 300px;

  /* background-position: -100px 0; */
}
.wrapper .login {
  height: 300px;
  width: 300px;
  justify-content: flex-end;
  /* background-color: red; */
}
.wrapper .app {
  width: 150px;
  height: 120px;
  margin-right: 40px;
  /* background-color: red; */
}
.app-title {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin: 7px 0;
  font-size: 25px;
  color: #111;
  line-height: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizelegibility;
  margin-bottom: 30px;
}
.qr {
  display: flex;
}
.loadDB {
  width: 105px;
  height: 30px;
  background-color: #48aa0d;
  margin-right: 10px;
}
.loadDB a {
  display: block;
  text-align: center;
  line-height: 30px;
  text-decoration: none;
  color: #fff;
  font-size: 12px;
}
.app-qr {
  height: 29px;
  width: 29px;
  background: url(~assets/img/home/icon_qrcode_green.png);
  background-size: 30px 30px;
  justify-content: flex-start;
  border: 1px solid #48aa0d;
  border-radius: 2px;
}
.app-qr-expend {
  display: none;
  width: 200px;
  height: 220px;
  vertical-align: middle;
  background-color: #fff;
  border-radius: 2px;
}
.app-qr-expend p {
  text-align: center;
}
.app-qr-expend img {
  display: block;
  margin: 20px 20px 10px 20px;
  width: 160px;
  height: 160px;
}
</style>

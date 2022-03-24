<template>
  <div id="account-body">
    <!-- <div class="scan"></div> -->
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      class="account-body-tabs"
      stretch
    >
      <el-tab-pane label="短信登陆/注册" name="first" class="account-tab-phone">
        <div class="account-form">
          <div class="account-form-tip">
            <h1>
              请仔细阅读
              <a href="https://accounts.douban.com/passport/agreement"
                >豆瓣使用协议、豆瓣个人信息保护政策</a
              >
            </h1>
          </div>
          <div class="account-form-raw1">
            <el-select
              v-model="value"
              placeholder="请输入"
              class="form-select"
              size="small"
            >
              <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.value
                }}</span>
              </el-option>
            </el-select>
            <el-input
              v-model="input"
              placeholder="手机号"
              class="form-input1"
              size="small"
            ></el-input>
          </div>
          <div class="account-form-raw2">
            <el-input
              v-model="input"
              placeholder="验证码"
              class="form-input2"
              size="small"
            ></el-input>
            <el-row>
              <el-button
                :disabled="isdisable"
                type="success"
                plain
                size="small"
                @click="getTime"
                class="send"
                >{{ title }}
              </el-button>
            </el-row>
          </div>
          <div class="account-form-sub">
            <el-row>
              <el-button
                native-type="submit"
                type="success"
                plain
                size="small"
                class="sub"
                >登录豆瓣
              </el-button>
            </el-row>
          </div>
          <div class="_link">
            <a href="https://help.douban.com/account?app=1#t1-q5"
              >收不到验证码</a
            >
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="密码登录" name="second" class="account-tab-account">
        <div class="account-form-tip-mm">
          <h1>
            <a href="https://accounts.douban.com/passport/get_password"
              >找回密码</a
            >
          </h1>
        </div>
        <div class="account-form-raw1-mm">
          <el-input
            v-model="input"
            placeholder="手机号/邮箱"
            class="form-input1-mm"
            size="small"
          ></el-input>
        </div>
        <div class="account-form-raw2-mm">
          <el-input
            v-model="input"
            placeholder="密码"
            class="form-input2-mm"
            size="small"
          ></el-input>
        </div>
        <div class="account-form-sub">
          <el-row>
            <el-button
              native-type="submit"
              type="success"
              plain
              size="small"
              class="sub"
              >登录豆瓣
            </el-button>
          </el-row>
        </div>
        <div class="_link2">
          <a href="https://help.douban.com/account?app=1#t1-q5">海外手机登录</a>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div class="account-form-3rd">
      <div class="account-form-3rd-hd">第三方登录:</div>
      <div class="a1">
        <a
          href="https://api.weibo.com/oauth2/authorize?state=se1WD593nLk%2521douban-web%2521https%253A//www.douban.com/&redirect_uri=https%3A//accounts.douban.com/connect/sina_weibo/callbackaHR0cHM6Ly9hY2NvdW50cy5kb3ViYW4uY29tLw%3D%3D&response_type=code&client_id=1994016063&scope=&display=default###"
        ></a>
      </div>
      <div class="a2">
        <a
          href="https://api.weibo.com/oauth2/authorize?state=se1WD593nLk%2521douban-web%2521https%253A//www.douban.com/&redirect_uri=https%3A//accounts.douban.com/connect/sina_weibo/callbackaHR0cHM6Ly9hY2NvdW50cy5kb3ViYW4uY29tLw%3D%3D&response_type=code&client_id=1994016063&scope=&display=default###"
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
import { debounce } from "@/common/util.js";
export default {
  name: "loginBox",
  data() {
    return {
      isdisable: false,
      count: 0,
      title: "获取验证码",
      activeName: "first",
      input: "",
      cities: [
        {
          value: "中国大陆",
          label: "+86",
        },
        {
          value: "中国香港",
          label: "+852",
        },
        {
          value: "中国澳门",
          label: "+853",
        },
        {
          value: "中国台湾",
          label: "+856",
        },
        {
          value: "日本",
          label: "+81",
        },
      ],
      value: "+86",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getTime() {
      // console.log(this);
      this.isdisable = false;
      var time = 10;
      const countTime = debounce(() => {
        var timer = setInterval(() => {
          //要用es6中 箭头函数解决this指向问题 ***es5: setInterval(function(){}) 这里this指向window
          if (time == 0) {
            clearInterval(timer);
            this.title = "获取验证码";
            this.isdisable = false;
            time = 10;
          } else {
            console.log(222222);
            let vo = time + "s后重新发送";
            // Vue.set(this.title, 0, vo);
            this.title = vo;
            this.isdisable = true;
            console.log(this.title);
            time--;
          }
        }, 1000);
      }, 1000);
      countTime();
    },
  },
};
</script>
<style scoped>
#account-body {
  position: relative;
  width: 300px;
  height: 296px;
  margin-top: 5px;
  float: right;
  display: flex;
  flex-direction: column;
  /* background-color: pink; */
}
/* .scan {
  justify-content: flex-end;
  width: 30px;
  height: 30px;
  background-color: red;
  /* margin-bottom: 10px; 
} */
.account-body-tabs {
  height: 250px;
  border-bottom: 1px ridge #ddd;
}
.account-body-tabs el-tab-pane {
  width: 300px;
}
.account-body-tabs .account-tab-account {
  width: 300px;
}
.account-body-tabs .account-tab-phone {
  width: 300px;
}
.account-form-tip {
  font-size: 3px;
  margin: 3px 0 10px 0;
  color: #9b9b9b;
}
.account-form-tip a {
  text-decoration: none;
  color: green;
}
.account-form-raw1 {
  display: flex;
  margin-bottom: 10px;
}
.account-form-raw1 .form-select {
  width: 100px;
}
.account-form-raw2 {
  display: flex;
  margin-bottom: 10px;
}
.account-form-raw2 .form-input2 {
  width: 200px;
}
.account-form-raw2 .send {
  width: 100px;
}
.account-form-tip-mm {
  display: flex;
  justify-content: flex-end;
  font-size: 3px;
  margin: 3px 0 10px 0;
  color: #9b9b9b;
}
.account-form-tip-mm a {
  text-decoration: none;
  color: green;
}
.account-form-raw1-mm {
  display: flex;
  margin-bottom: 10px;
}

.account-form-raw2-mm {
  display: flex;
  margin-bottom: 10px;
}
.account-form-raw2 .form-input2-mm {
  width: 300px;
}
.account-form-sub {
  display: flex;
  margin-bottom: 10px;
}
.account-form-sub .sub {
  width: 300px;
}
._link {
  display: flex;
  justify-content: flex-end;
}
._link a {
  color: green;
  font-size: 3px;

  text-decoration: none;
}

._link2 {
  display: flex;
  justify-content: flex-end;
}
._link2 a {
  color: green;
  font-size: 3px;

  text-decoration: none;
}
.account-form-3rd {
  width: 300px;
  /* background-color: red; */
  /* justify-content: flex-start; */
  display: flex;
  flex-direction: row;
}
.account-form-3rd-hd {
  margin-top: 15px;
  width: 64px;
  font-size: 3px;
  text-align: center;
  justify-content: flex-start;
  color: #9b9b9b;
}
.account-form-3rd a {
  display: block;
  height: 22px;
}
.account-form-3rd .a1 {
  width: 22px;
  height: 22px;
  background: url(~assets/weixin.svg);

  background-size: 22px 22px;
  margin-top: 13px;
  margin-left: 10px;
}
.account-form-3rd .a2 {
  width: 22px;
  height: 22px;
  background: url(~assets/weibo.svg);
  background-size: 22px 22px;
  margin-top: 13px;
  margin-left: 10px;
}
</style>

<template>
  <div>
    <div id="anony-nav-banner">
      <h1 id="douban-logo">
        <a href="https://www.douban.com"
          ><img src="~assets/logo_db@2x.png" alt=""
        /></a>
      </h1>
    </div>
    <div id="anony-nav">
      <div class="anony-nav-links">
        <ul>
          <li>
            <a target="_blank" class="lnk-book" href="https://book.douban.com"
              >豆瓣读书</a
            >
          </li>
          <li>
            <a target="_blank" class="lnk-movie" href="https://movie.douban.com"
              >豆瓣电影</a
            >
          </li>
          <li>
            <a target="_blank" class="lnk-music" href="https://music.douban.com"
              >豆瓣音乐</a
            >
          </li>
          <li>
            <a
              target="_blank"
              class="lnk-group"
              href="https://www.douban.com/group/"
              >豆瓣小组</a
            >
          </li>
          <li>
            <a target="_blank" class="lnk-fm" href="https://douban.fm"
              >豆瓣FM</a
            >
          </li>
          <li>
            <a
              target="_blank"
              class="lnk-events"
              href="https://www.douban.com/location/"
              >豆瓣同城</a
            >
          </li>
          <li id="read_log">
            <a target="_blank" class="lnk-read" href="https://read.douban.com"
              >豆瓣阅读</a
            >
          </li>
          <li>
            <a
              target="_blank"
              class="lnk-market"
              href="https://market.douban.com?utm_campaign=anonymous_top_nav&amp;utm_source=douban&amp;utm_medium=pc_web"
              >豆瓣豆品</a
            >
          </li>
          <li id="time_log">
            <a
              target="_blank"
              class="lnk-shijian"
              href="https://time.douban.com/?dt_time_source=douban-web_anonymous_index_top_nav"
              >豆瓣时间</a
            >
          </li>
        </ul>
      </div>

      <div class="site-name" title="豆瓣网" style="">豆瓣网</div>
      <!-- <div class="anony-srh">
        <form action="https://www.douban.com/search" method="get">
          <span class="inp"
            ><input
              type="text"
              maxlength="60"
              size="12"
              placeholder="书籍、电影、音乐、小组、小站、成员"
              name="q"
              autocomplete="off"
          /></span>
          <span class="bn"><input type="submit" value="搜索" /></span>
        </form> </div>-->
      <el-input
        class="anony-srh"
        v-model="input"
        placeholder="书籍、电影、音乐、小组、小站"
        type="text"
      >
      </el-input>
      <el-button class="search" type="primary" icon="el-icon-search"
        >搜索</el-button
      >
    </div>
    <RegNew></RegNew>
  </div>
</template>
<script>
import { user } from "../../apis/home";
import RegNew from "./childComps/annoy-reg-new.vue";
export default {
  name: "home",
  data() {
    return {
      input: "",
    };
  },
  components: {
    RegNew,
  },
  created() {
    user().then((res) => {
      console.log(res);
    });
  },
  mounted() {
    this.getfor();
  },
  methods: {
    // 获取循环精灵图
    getfor() {
      var lis = document.getElementsByTagName("li");
      // console.log(lis);
      // console.log(lis.length);
      for (var i = 0; i < lis.length - 1; i++) {
        // console.log(i);
        var index = i * 60;
        if (i == 6) {
          lis[i].style.backgroundPositionX = "-" + "0" + "px";
        } else {
          lis[i].style.backgroundPositionX = "-" + index + "px";
        }
      }
    },
  },
};
</script>
<style scoped>
#anony-nav-banner {
  clear: both;
  overflow: hidden;
  background-color: #edf4ec;
  margin-bottom: 30px;
  /* margin-top: 10px; */
}
#douban-logo {
  height: 20px;
  width: 102px;
  margin: 7px 13px;
  background-size: contain;
}
#douban-logo img {
  height: 20px;
  width: 102px;
  margin-bottom: 20px;
}
.site-name {
  display: inline-block;
  line-height: 24px;
  height: 24px;
  margin-top: 4px;
  margin-right: 24px;
  width: 73px;
  background-image: url(https://img3.doubanio.com/f/sns/714b8751a533ef592bea5cd4603dbb9e713ded61/pics/sns/sitename.png);
  background-size: contain;
  background-repeat: no-repeat;
  text-indent: -999em;
}
#anony-nav {
  position: relative;
  color: #111;
  font: 12px Helvetica, Arial, sans-serif;
  line-height: 1.62;
  margin: 0;
  padding: 0;
  width: 1080px;
  height: 33px;
  margin: 0 auto 25px;
}
.anony-nav-links {
  /* display: block;
  width: 517px;
  height: 21px; */
  float: right;
  margin-top: 6px;
}
.anony-nav-links ul {
  /* width: 515px; */
  height: 21px;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  float: left;
}
.anony-nav-links ul li {
  width: 40px;
  height: 21px;
  display: block;
  margin: 0 14px 0 0px;
  /* background-color: red; */
  /* overflow: hidden; */
  background: url(~assets/anony_nav_logo@2x.png) no-repeat;
  background-size: 462px 19.5px;
  float: left;
}
#read_log {
  background: url(~assets/ic_read_home_nav@2x.png) no-repeat;
  background-size: 40px 20px;
  background-color: #fff;
}
#time_log {
  background: url(~assets/ic_shijian_home_nav@2x.png) no-repeat;
  background-size: 40px 21px;
}
.anony-nav-links ul li a {
  display: inline-block;
  zoom: 1;
  width: 40px;
  height: 20px;
  overflow: hidden;
  margin: 0;
  line-height: 20em;
  outline: none;
  vertical-align: middle;
}
.site-name {
  position: relative;
  float: left;
  margin-top: 20px;
}
.anony-srh {
  margin-top: 10px;
  width: 240px;
  height: 20px;
  position: relative;
  float: left;
}
.search {
  margin-top: 10px;
  height: 40px;
}
</style>

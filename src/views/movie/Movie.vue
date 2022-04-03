<template>
  <div id="movie">
    <div class="movie-global-navBar">
      <ul class="left">
        <li>
          <a target="_blank" class="lnk-book" href="https://book.douban.com"
            >读书</a
          >
        </li>
        <li>
          <a target="_blank" class="lnk-movie" href="">电影</a>
        </li>
        <li>
          <a target="_blank" class="lnk-music" href="https://music.douban.com"
            >音乐</a
          >
        </li>
        <li>
          <a
            target="_blank"
            class="lnk-group"
            href="https://www.douban.com/group/"
            >小组</a
          >
        </li>
        <li>
          <a target="_blank" class="lnk-fm" href="https://douban.fm">FM</a>
        </li>
        <li>
          <a
            target="_blank"
            class="lnk-events"
            href="https://www.douban.com/location/"
            >同城</a
          >
        </li>
        <li id="read_log">
          <a target="_blank" class="lnk-read" href="https://read.douban.com"
            >阅读</a
          >
        </li>
        <li>
          <a
            target="_blank"
            class="lnk-market"
            href="https://market.douban.com?utm_campaign=anonymous_top_nav&amp;utm_source=douban&amp;utm_medium=pc_web"
            >豆品</a
          >
        </li>
        <li id="time_log">
          <a
            target="_blank"
            class="lnk-shijian"
            href="https://time.douban.com/?dt_time_source=douban-web_anonymous_index_top_nav"
            >时间</a
          >
        </li>
      </ul>
      <ul class="right">
        <li>
          <a href="#" class="load" @mouseover="mouseover" @mouseout="mouseout"
            >下载豆瓣客户端</a
          >
          <a href="#" class="login">登录/注册</a>
          <div class="hide" v-show="isShow">
            <div class="loadDou">
              <img src="~assets/img/movie/nav_doubanapp_6.png" alt="" />
            </div>
            <div class="title-load">
              <h1>豆瓣</h1>
            </div>
            <div class="scan">
              <img src="~assets/img/home/doubanapp_qrcode.png" alt="" />
            </div>
            <div class="phone">
              <a
                href="https://apps.apple.com/cn/app/dou-ban/id907002334"
                class="a1"
                >iphone/
              </a>
              <a
                href="https://apps.apple.com/cn/app/dou-ban/id907002334"
                class="a2"
                >Android</a
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="db-movie-nav">
      <div class="nav-w">
        <div class="nav-wrap">
          <div class="nav-primary">
            <div class="nav-logo">
              <a href="#"></a>
            </div>
            <el-input
              class="anony-srh"
              placeholder="搜索电影、电视剧、综艺、影人"
              type="text"
              size="mini"
            >
            </el-input>
            <el-button
              class="search"
              type="primary"
              icon="el-icon-search"
              size="mini"
            ></el-button>
          </div>
        </div>
        <div class="nav-second">
          <div class="nav-items">
            <ul>
              <li>
                <a href="https://movie.douban.com/cinema/nowplaying/"
                  >影讯&amp;购票</a
                >
              </li>
              <li><a href="https://movie.douban.com/explore">选电影</a></li>
              <li><a href="https://movie.douban.com/tv/">电视剧</a></li>
              <li><a href="https://movie.douban.com/chart">排行榜</a></li>
              <li><a href="https://movie.douban.com/tag/">分类</a></li>
              <li>
                <a href="https://movie.douban.com/review/best/">影评</a>
              </li>
              <li>
                <a href="https://movie.douban.com/annual/2021?source=navigation"
                  >2021年度榜单</a
                >
              </li>
              <li>
                <a
                  href="https://www.douban.com/standbyme/2021?fullscreen=true&amp;hidenav=true&amp;autorotate=false&amp;source=movie_navigation"
                  target="_blank"
                  >2021书影音报告</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="domain">
      <el-container>
        <el-container>
          <el-main>
            <div class="w1">
              <div class="w1-header">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/' }"
                    >正在热映</el-breadcrumb-item
                  >
                  <el-breadcrumb-item>全部正在热映</el-breadcrumb-item>
                  <el-breadcrumb-item>即将上映</el-breadcrumb-item>
                </el-breadcrumb>
              </div>
              <div class="w1-main">
                <el-carousel indicator-position="outside">
                  <el-carousel-item>
                    <MovieList
                      :MovieHot="MovieHot"
                      :MovieRate="MovieRate"
                    ></MovieList>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
          </el-main>
          <el-aside width="200px">Aside</el-aside>
        </el-container>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>
  </div>
</template>
<script>
import { in_theaters } from "@/apis/movie.js";
import MovieList from "../../components/common/MovieList.vue";

export default {
  name: "Movie",
  data() {
    return {
      isShow: false,
      Movies: [],
      MovieRate: [],
      MovieHot: [],
    };
  },
  components: {
    MovieList,
  },
  created() {
    this.getMovies();
  },
  mounted() {},
  methods: {
    // /* 获取影片名称 */
    // getMovieName() {
    //   in_theaters().then((res) => {
    //     for (let i = 0; i < res.length; i++) {
    //       this.MovieName[i] = res[i].data[0].name;
    //     }
    //     // console.log(this.MovieName);
    //   });
    // },
    // /* 获取影片图片 */
    // getMovieImg() {
    //   in_theaters().then((res) => {
    //     for (let i = 0; i < res.length; i++) {
    //       this.MovieImg[i] = res[i].data[0].poster;
    //     }
    //     // console.log(this.MovieImg);
    //   });
    // },
    // /* 获取影片评分 */
    // getMovieRate() {
    //   in_theaters().then((res) => {
    //     for (let i = 0; i < res.length; i++) {
    //       this.MovieRate[i] = res[i].data[0].doubanRating;
    //     }
    //     // console.log(this.MovieImg);
    //   });
    // },

    /* 获取影片 */
    getMovies() {
      in_theaters().then((res) => {
        for (let i = 0; i < res.length; i++) {
          this.Movies[i] = res[i].data[0];
          this.MovieRate[i] = res[i].doubanRating;
          /* 获取热门电影 */
          if (i < 5) {
            this.MovieHot[i] = res[i].data[0];
          }
        }
        // console.log(this.Movies);
        // console.log(this.MovieHot);
      });
    },
    mouseover() {
      // console.log(1);
      this.isShow = true;
    },
    mouseout() {
      // console.log(2);
      this.isShow = false;
    },
  },
};
</script>
<style scoped>
.movie-global-navBar {
  height: 28px;
  line-height: 1.62;
  font-size: 12px;
  background-color: #545652;
}
.movie-global-navBar .left li {
  display: block;
  float: left;
  width: 48px;
  height: 28px;
  margin: 0 10px 0 0;
  list-style: none;
}
.movie-global-navBar .right li {
  float: right;
  /* width: 68px; */
  height: 28px;
  /* margin: 0 50px 0 0; */
  list-style: none;
}
.movie-global-navBar .right .load {
  margin: 0 30px 0 80px;
}
.movie-global-navBar .right .login {
  margin-right: 30px;
}
.movie-global-navBar ul li a {
  text-decoration: none;
  color: #d5d5d5;
  font: 12px Helvetica, Arial, sans-serif;
  line-height: 28px;
  vertical-align: middle;
}
.hide {
  position: relative;
  z-index: 9;
  width: 250px;
  height: 450px;
  background-color: #fff;
  border: 1px solid #f0f3f5;
}
.hide .loadDou {
  padding: 50px 75px 0 75px;
  width: 100px;
  height: 100px;
}
.hide .title-load {
  width: 100px;
  height: 50px;
  margin: 25px 75px 20px 75px;
}
.hide .title-load h1 {
  display: block;
  padding: 0 25px 0 25px;
}
.hide .scan img {
  width: 160px;
  height: 160px;
  padding: 0px 45px 0px 45px;
}
.hide .phone {
  display: flex;
  justify-content: center;
  font-size: 10px;
}
.a1 {
  text-decoration: none;
}
.a2 {
  text-decoration: none;
}
.domain {
  position: absolute;
  width: 1100px;
  height: 2400px;
  margin-left: 200px;
  /* background-color: red; */
}
.db-movie-nav {
  height: 116px;
  background: url(~assets/img/movie/annual_2021.png) no-repeat;
  background-size: 186px 96px;
  background-position: 900px 10px;
  background-color: #f0f3f5;
}
.nav-w {
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  /* background-color: red; */
}
.nav-primary {
  padding-top: 20px;
  display: flex;
  justify-content: flex-start;
  /* margin-left: 200px; */
}
.nav-logo {
  width: 145px;
  height: 56px;
  background: url(~assets/img/movie/lg_movie@2x.png) no-repeat;
  background-size: 115px 26px;
  overflow: hidden;
}
.nav-logo a {
  display: block;
  text-align: center;
  text-decoration: none;
}
.anony-srh {
  float: left;
  width: 400px;
  height: 34px;
}
.search {
  height: 29px;
}
.nav-second {
  display: flex;
  justify-content: flex-start;
  height: 41px;
  width: 1200px;
}
.nav-second .nav-items {
  height: 23px;
}
.nav-second .nav-items ul {
  font-size: 14px;
  padding-left: 0;
  height: 23px;
}
.nav-second .nav-items ul li {
  float: left;
  height: 16px;

  margin: 0 25px 0 0;
  list-style: none;
}
.nav-second .nav-items ul li a {
  color: #37a;
  text-decoration: none;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.w1 .w1-main {
  margin-top: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<template>
  <div>
    <header>
      <section>
        <span class="title">最近热门电影</span>
        <span class="header-link">热门</span>
        <span class="header-link">最新</span>
        <span class="header-link">豆瓣高分</span>
        <span class="header-link">冷门佳片</span>
        <span class="header-link">华语</span>
        <span class="header-link">欧美</span>
        <span class="header-link">日本</span>
        <span class="header-link">韩国</span>
      </section>
      <section>
        <span class="more">更多>></span>
      </section>
    </header>
    <el-carousel
      height="550px"
      indicator-position="none"
      ref="carousel"
      arrow="never"
      :autoplay="autoplay"
    >
      <el-carousel-item v-for="(item, index) in recentMovieChunk" :key="index">
        <MovieList5 :Movie="item"></MovieList5>
      </el-carousel-item>
    </el-carousel>
    <section class="actions">
      <i class="el-icon-caret-left" @click="indexPrev" />
      <!--       
      <i class="dot" ></i>
      <i class="dot" :class="{ active: isActive[1] }" @click="changActive"></i>
      <i class="dot" :class="{ active: isActive[2] }" @click="changActive"></i>
      <i class="dot" :class="{ active: isActive[3] }" @click="changActive"></i>
      <i class="dot" :class="{ active: isActive[4] }" @click="changActive"></i> -->
      <i
        class="dot"
        v-for="(item, index) in recentMovieChunk"
        :key="index"
        :class="{ active: isActive[index] === 1 }"
        @click="changeActive(index)"
      ></i>
      <i class="el-icon-caret-right" @click="indexNext" />
    </section>
  </div>
</template>
<script>
import { chunk, findIndex } from "lodash";
import { in_theaters } from "@/apis/movie.js";
import MovieList5 from "@/components/common/MovieList-5.vue";
export default {
  name: "recentMovie",
  data() {
    return {
      isActive: [1, 0, 0, 0, 0],
      recentMovieChunk: [],
      autoplay: false,
    };
  },
  components: {
    MovieList5,
  },
  mounted() {
    this.fetchRecentMovie();
  },
  methods: {
    async fetchRecentMovie() {
      const resp = await in_theaters();
      this.recentMovieChunk = chunk(resp, 10);
      console.log(this.recentMovieChunk);
    },
    changeActive(index) {
      // console.log(index);
      // console.log(this.recentMovieChunk.length);
      // console.log(this.isActive);
      for (let i = 0; i < this.recentMovieChunk.length; i++) {
        this.isActive[i] = 0;
      }
      this.isActive.splice(index, 1, 1);
      this.$refs.carousel.setActiveItem(index);
      // console.log(this.isActive);
    },

    indexPrev() {
      // console.log(this.isActive);
      let index = findIndex(
        this.isActive,
        (e) => {
          return e == 1;
        },
        0
      );
      if (index - 1 >= 0) {
        for (let i = 0; i < this.recentMovieChunk.length; i++) {
          this.isActive[i] = 0;
        }
        this.isActive.splice(index - 1, 1, 1);
        this.$refs.carousel.prev();
      } else {
        for (let i = 0; i < this.recentMovieChunk.length; i++) {
          this.isActive[i] = 0;
        }
        this.isActive.splice(this.recentMovieChunk.length - 1, 1, 1);
        this.$refs.carousel.prev();
      }
    },
    indexNext() {
      let index = findIndex(
        this.isActive,
        (e) => {
          return e == 1;
        },
        0
      );
      if (index + 1 < this.recentMovieChunk.length) {
        for (let i = 0; i < this.recentMovieChunk.length; i++) {
          this.isActive[i] = 0;
        }
        this.isActive.splice(index + 1, 1, 1);
        this.$refs.carousel.next();
      } else {
        for (let i = 0; i < this.recentMovieChunk.length; i++) {
          this.isActive[i] = 0;
        }
        this.isActive.splice(0, 1, 1);
        this.$refs.carousel.next();
      }
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 18px;
  border-bottom: 1px solid #eaeaea;
}
.header-link {
  margin-left: 15px;
  font-size: 13px;
  color: #37a;
  transition: all 0.2s;
  cursor: pointer;
}

.header-link:hover {
  color: #fff;
  background-color: #37a;
}
.more {
  float: right;
  margin-left: 15px;
  font-size: 13px;
  color: #37a;
  transition: all 0.2s;
  cursor: pointer;
}
.more:hover {
  color: #fff;
  background-color: #37a;
}
.actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  display: block;
  margin-left: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  cursor: pointer;
  color: #6d98d2;
  background-color: #d8d8d8;
}
.el-icon-caret-left,
.el-icon-caret-right {
  display: block;
  cursor: pointer;
  color: #6d98d2;
}
.el-icon-caret-right {
  margin-left: 8px;
}
.active {
  background-color: #6198d7;
}
</style>

<template>
  <div id="Movie-list-item">
    <img :src="movie.poster" alt="" />
    <div class="movie-info">
      <p>{{ movie.name }}</p>
      <div class="rate-model">
        <div class="imgRate"></div>
        <p class="rating">{{ rate }}</p>
      </div>
      <el-button type="primary" size="mini" class="el-button"
        >选座购票</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "MovieListItem",
  props: {
    MovieItem: {
      type: Object,
      default() {
        return {};
      },
    },
    // MovieRate: {
    //   type: Array,
    //   default() {
    //     return [];
    //   },
    // },
  },
  created() {
    this.getRateStar();
  },
  methods: {
    getRateStar() {
      var star = document.querySelectorAll(".imgRate");
      // console.log(star);
      for (let i = 0; i < star.length; i++) {
        var index = Math.ceil(10 - this.MovieItem.doubanRating);
        star[i].style.backgroundPosition = "0 -" + index * 11 + "px";
      }
    },
  },

  computed: {
    movie() {
      return this.MovieItem.data[0];
    },
    rate() {
      return this.MovieItem.doubanRating;
    },
  },
};
</script>
<style scoped>
#Movie-list-item {
  margin-bottom: 40px;
}
#Movie-list-item img {
  /* width: 90px; */
  /* height: 134px; */
  width: 112px;
  height: 150px;
}
.movie-info {
  width: 90px;
  text-align: center;
}
.movie-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rate-model {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.imgRate {
  width: 55px;
  height: 11px;
  /* background-color: red; */
  background: url(~assets/img/movie/ic_rating_s@2x.png);
  background-size: 55px 121px;
}
.rating {
  color: #e09015;
  font-size: 12px;
}
.el-button {
  margin-top: 10px;
}
</style>

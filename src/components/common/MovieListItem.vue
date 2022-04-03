<template>
  <div id="Movie-list-item">
    <img :src="this.MovieItem.poster" alt="" />
    <div class="movie-info">
      <p>{{ MovieItem.name }}</p>
      <span class="rate">{{ this.MovieRate }}</span>
      <!-- <el-button type="primary" size="mini">主要按钮</el-button> -->
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
};
</script>
<style scoped>
/* .Movie-list-item img {
  width: 90px;
  height: 134px;
} */
</style>

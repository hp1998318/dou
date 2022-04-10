<template>
  <div id="Movie-list">
    <MovieListItem
      class="movielistitem"
      v-for="(item, index) in Movie"
      :key="index"
      :MovieItem="item"
    ></MovieListItem>
  </div>
</template>
<script>
import MovieListItem from "./MovieListItem.vue";
// import Vue from "vue";
export default {
  name: "MovieList5",
  components: {
    MovieListItem,
  },
  // mounted() {
  //   Vue.forceUpdate();
  // },
  props: {
    Movie: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
#Movie-list {
  display: flex;
  /* 让弹性盒子在必要的时候拆行 */
  flex-wrap: wrap;
  /*  / space-evenly 均等分    justify-content留白  ！space-around与space-evenly的区别*/
  justify-content: space-around;
  /* 原生 */
  /* padding-bottom: 59px; */
}
.movielistitem {
  flex: 20%;
}
</style>

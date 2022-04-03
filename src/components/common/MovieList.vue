<template>
  <div id="Movie-list">
    <MovieListItem
      v-for="(item, index) in MovieHot"
      :key="index"
      :MovieItem="item"
      :MovieRate="MovieRate"
    ></MovieListItem>
  </div>
</template>
<script>
import MovieListItem from "./MovieListItem.vue";
// import Vue from "vue";
export default {
  name: "MovieList",
  components: {
    MovieListItem,
  },
  // mounted() {
  //   Vue.forceUpdate();
  // },
  props: {
    MovieHot: {
      type: Array,
      default() {
        return [];
      },
    },
    MovieRate: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.Movie-list {
  display: flex;
  /* 让弹性盒子在必要的时候拆行 */
  flex-wrap: wrap;
  /*  / space-evenly 均等分    justify-content留白  ！space-around与space-evenly的区别*/
  justify-content: space-evenly;
  /* 原生 */
  /* padding-bottom: 59px; */
}
</style>

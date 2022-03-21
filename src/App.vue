<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from "./views/home/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
  created() {
    // get();
    // user();
  },
};
</script>

<style>
* {
  margin: 0;
}
</style>

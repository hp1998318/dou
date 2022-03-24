<template>
  <div id="annoy-reg-new">
    <div class="wrapper">
      <div class="app"></div>
      <div class="login">
        <loginBox></loginBox>
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
  width: 1150px;
  height: 304px;
  margin-left: 60px;
  background: url(~assets/1771365ca98ig9er706.jpg) no-repeat;
  background-size: 691px 300px;
  /* background-position: -100px 0; */
}
</style>

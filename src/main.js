import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import axios from "axios";
// Vue.prototype.$axios = axios;
// axios.defaults.baseURL = "/api"; //关键代码
Vue.use(ElementUI);
new Vue({
  render: (h) => h(App),
}).$mount("#app");

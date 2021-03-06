import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store.js";
// import "./plugins/vconsole";
import "./plugins/ui";
import "./assets/css/file.css";
import './assets/css/style.css';
import BaiduMap from 'vue-baidu-map';

Vue.use(BaiduMap,{
  ak: 'GdxI7nmOnetq8NrHHigd78vbGYpMUvSg'
})


Vue.config.productionTip = false;
document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
window.onresize = function () {
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

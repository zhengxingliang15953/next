import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store.js";
import "./plugins/ui";
import "./assets/css/file.css";
import VConsole from '../src/plugins/vconsole';


Vue.filter('identity', function (value) {
  if(value){
    return "超级管理员";
  }{
    return "管理员";
  }
})


Vue.config.productionTip = false;
document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.directive('color',{
  bind:function(el,binding){
    if(binding.value==true){
      el.style.color='red';
      console.log(binding.value);
    }
  },
})

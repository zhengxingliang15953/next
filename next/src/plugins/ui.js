import Vue from "vue";
import iView from "iview";
import "iview/dist/styles/iview.css";
import Vant from "vant";
import "vant/lib/index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(iView);

export let messageError=(value)=>{
    iView.Message.error(value);
}
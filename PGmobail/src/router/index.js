import Vue from "vue";
import VueRouter from "vue-router";
import RouterHooks from "./hooks";


const routes = [
  {
    name:'index',//首页
    path:'/',
    component:()=>import('../views2/index.vue'),
    redirect:'/home',
    children:[
      {
        name:'home',//首页
        path:'/home',
        component:()=>import('../views2/home.vue'),
      }
    ]
  }
];
const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});


/* router.beforeEach((to, from, next) => {
  // console.log(to.path);
  if(to.path=='/'){
    next();
  }else if(!window.sessionStorage.getItem('token')){
    next('/');
  }else{
    next();
  }
}) */

RouterHooks.init(router);
Vue.use(VueRouter);

export default router;

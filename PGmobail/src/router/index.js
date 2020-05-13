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
      },
      {
        name:'aboutus',//关于我们
        path:'/aboutus',
        component:()=>import('../views2/aboutus.vue'),
      },
      {
        name:'product',//产品中心
        path:'/product',
        component:()=>import('../views2/product.vue'),
      },
      {
        name:'solution',//解决方案
        path:'/solution',
        component:()=>import('../views2/solution.vue'),
      },
      {
        name:'contact',//解决方案
        path:'/contact',
        component:()=>import('../views2/contact.vue'),
      },
      {
        name:'new',//新闻资讯
        path:'/new',
        component:()=>import('../views2/new.vue'),
      },
      {
        name:'newsDetail',//新闻详情页
        path:'/newsDetail',
        component:()=>import('../views2/newsDetail.vue'),
      },
    ]
  }
];
const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0;
  next();
})

RouterHooks.init(router);
Vue.use(VueRouter);

export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import RouterHooks from "./hooks";


const routes = [
  {
    name:'login',//登录
    path:'/',
    component:()=>import('../views2/login.vue'),
  },
  {
    name:'index',//首页
    path:'/index',
    component:()=>import('../views2/index.vue'),
    redirect:'/index/apply',
    children:[
      {
        name:'apply',//开支管理
        path:'/index/apply',
        component:()=>import('../views2/apply.vue'),
      },
      {
        name:'customer',//客户管理
        path:'/index/customer',
        component:()=>import('../views2/customer.vue'),
      },
      {
        name:'supply',//供应管理
        path:'/index/supply',
        component:()=>import('../views2/supply.vue'),
      },
      {
        name:'order',//订单管理
        path:'/index/order',
        component:()=>import('../views2/order.vue'),
      },
      {
        name:'install',//安装人员管理
        path:'/index/install',
        component:()=>import('../views2/install.vue'),
      },
      {
        name:'system',//系统管理
        path:'/index/system',
        component:()=>import('../views2/system.vue'),
      },
      {
        name:'payfor',//付款管理
        path:'/index/payfor',
        component:()=>import('../views2/payfor.vue'),
      },
      {
        name:'orderApply',//订单审核管理
        path:'/index/orderApply',
        component:()=>import('../views2/orderApply.vue'),
      },
    ]
  },
  {
    name:'mobail',//手机订单添加页面
    path:'/mobail',
    component:()=>import('../views2/mobail.vue'),
    redirect:'/mobail/orderList',
    children:[
      {
        name:'mobailList',//订单列表
        path:'/mobail/orderList',
        component:()=>import('../views2/mobailList.vue')
      },
      {
        name:'mobailAdd',//订单添加
        path:'/mobail/orderAdd',
        component:()=>import('../views2/mobailAdd.vue')
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
  // console.log(to.path);
  if(to.path=='/'){
    next();
  }else if(!window.sessionStorage.getItem('token')){
    next('/');
  }else{
    next();
  }
})

RouterHooks.init(router);
Vue.use(VueRouter);

export default router;

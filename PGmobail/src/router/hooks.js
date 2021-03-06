// 需要拦截的路由名称列表
const needInterceptRouteNameList = ["/myself"];

export default {
  init(router) {
    router.beforeEach((to, from, next) => {
      const { path } = to;
      
      // 拦截后跳转到登录页面
      if (needInterceptRouteNameList.includes(path)&&!window.sessionStorage.getItem('token')) {
        return next("/login");
      }
      next();
    });
  }
};

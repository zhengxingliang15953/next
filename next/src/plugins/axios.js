import Axios from "axios";
import Config from "../config";
import INDEX from '../router/index';
import { messageError } from '../plugins/ui';

const instance = Axios.create({
  baseURL: Config.SERVER_BASE_URL,
  timeout: 15000
});

// const cancelToken = Axios.CancelToken;
const pending = [];

const removePending = (config) => {//取消请求
  for(let i in pending){
    if(pending[i].url==config.url){
      pending[i].f();
      pending.splice(i,1);
    }
  }
}

instance.interceptors.request.use(
  config => {
    // removePending(config);
    /* config.cancelToken = new cancelToken(c => {
      pending.push({url:config.url,f:c})
    }) */
    const token = getToken();

    if (token !== null) {
      config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  err => {
    return err;
  }
);

instance.interceptors.response.use(
  (res, config) => {
    // removePending(res.config);
    return res;
  },
  err => {
    const { status } = err.response;
    if (status === 400) {
      messageError('请求失败');
    }
    if (status === 403 || status === 401) {
      INDEX.replace("/");
      // this.$router.push('/');
    } else {
      return Promise.reject(err);
    }
  }
);

const getToken = function () {
  return window.sessionStorage.getItem("token");
};

export default instance;

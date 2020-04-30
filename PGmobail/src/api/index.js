import Http from "../plugins/axios";
import qs from "qs";
import Config from "../config";

const baseURL = Config.SERVER_BASE_URL;

/*管理员登录*/
export let getLogin = data => {
    return Http.post(`/api/admin/login`, qs.stringify(data));
};

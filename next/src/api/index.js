import Http from "../plugins/axios";
import qs from "qs";
import Config from "../config";

const baseURL = Config.SERVER_BASE_URL;

/*管理员登录*/
export let getLogin = data => {
    return Http.post(`/api/admin/login`, qs.stringify(data));
};
/**开支分页查询 */
export let getExpensesPagelist = data => {
    return Http.post(`/api/expenses/pagelist`, qs.stringify(data));
};
/**开支添加*/
export let getAddExpenses = data => {
    return Http.post(`/api/expenses/insert`, qs.stringify(data));
};
/**删除开支*/
export let getDeleteExpenses = data => {
    return Http.get(`/api/expenses/del?expenses_id=${data}`);
};
/**根据id获取开支*/
export let getByidExpenses = data => {
    return Http.get(`/api/expenses/expenses?expenses_id=${data}`);
};
/**编辑开支*/
export let getUpdateExpenses = data => {
    return Http.post(`/api/expenses/update`,qs.stringify(data));
};
/**安装人员分页查询*/
export let getInstallPageList = data => {
    return Http.post(`/api/installer/pagelist`,qs.stringify(data));
};
/**安装人员添加*/
export let getAddInstall = data => {
    return Http.post(`/api/installer/insert`,qs.stringify(data));
};
/**删除安装人员*/
export let getDeleteInstall = data => {
    return Http.get(`/api/installer/del?expenses_id=${data}`);
};
/**根据id获取安装人员*/
export let getByidInstall = data => {
    return Http.get(`/api/installer/expenses?expenses_id=${data}`);
};
/**编辑安装人员*/
export let getUpdateInstall = data => {
    return Http.post(`/api/installer/update`,qs.stringify(data));
};
/**供应商分页查询*/
export let getSupplyPageList = data => {
    return Http.post(`/api/supplier/pagelist`,qs.stringify(data));
};
/**供应商添加*/
export let getAddSupply = data => {
    return Http.post(`/api/supplier/insert`,qs.stringify(data));
};
/**供应商删除*/
export let getDeleteSupply = data => {
    return Http.get(`/api/supplier/del?supplier_id=${data}`);
};
/**根据id获取供应商*/
export let getByidSupply = data => {
    return Http.get(`/api/supplier/expenses?supplier_id=${data}`);
};
/**编辑供应商*/
export let getUpdateSupply = data => {
    return Http.post(`/api/supplier/update`,qs.stringify(data));
};
/**订单分页查询*/
export let getOrderPageList = data => {
    return Http.post(`/api/order/pagelist`,qs.stringify(data));
};
/**订单添加*/
export let getAddOrder = data => {
    return Http.post(`/api/order/insert`,qs.stringify(data));
};
/**根据id获取订单*/
export let getByidOrder = data => {
    return Http.get(`/api/order/order?order_id=${data}`);
};
/**供应商删除*/
export let getDeleteOrder = data => {
    return Http.get(`/api/order/del?order_id=${data}`);
};
/**编辑供应商*/
export let getUpdateOrder = data => {
    return Http.post(`/api/order/update`,qs.stringify(data));
};
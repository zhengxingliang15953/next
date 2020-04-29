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
    return Http.get(`/api/supplier/supplier?supplier_id=${data}`);
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
/**付款管理分页查询*/
export let getPayforPageList = data => {
    return Http.post(`/api/pay/pagelist`,qs.stringify(data));
};
/**付款管理添加*/
export let getAddPayfor = data => {
    return Http.post(`/api/pay/insert`,qs.stringify(data));
};
/**付款管理删除*/
export let getDeletePayfor = data => {
    return Http.get(`/api/pay/del?pay_id=${data}`);
};
/**根据id获取付款管理*/
export let getByidPayfor = data => {
    return Http.get(`/api/pay/expenses?pay_id=${data}`);
};
/**编辑付款管理*/
export let getUpdatePayfor = data => {
    return Http.post(`/api/pay/update`,qs.stringify(data));
};
/**付款管理分页查询*/
export let getAdminPageList = () => {
    return Http.get(`/api/admin/list`);
};
/**管理员添加*/
export let getAddAdmin = data => {
    return Http.post(`/api/admin/add`,data);
};
/**管理员删除*/
export let getDeleteAdmin = data => {
    return Http.get(`/api/admin/del?admin_id=${data}`);
};
/**管理员修改*/
export let getUpdateAdmin = data => {
    return Http.post(`/api/admin/update`,data);
};
/**客户管理分页查询*/
export let getUserPageList = (data) => {
    return Http.post(`/api/user/pagelist`,qs.stringify(data));
};
/**客户添加*/
export let getAddUser = data => {
    return Http.post(`/api/user/insert`,qs.stringify(data));
};
/**客户删除*/
export let getDeleteCustomer = data => {
    return Http.get(`/api/user/del?user_id=${data}`);
};
/**根据id获取客户信息*/
export let getByidUser = data => {
    return Http.get(`/api/user/user?user_id=${data}`);
};
/**管理员修改*/
export let getUpdateUser = data => {
    return Http.post(`/api/user/update`,qs.stringify(data));
};



/**订单导出*/
export let getOutOrder = data => {
    return Http.post(`/api/files/excel/order`,qs.stringify(data),{
        responseType: "blob"
    });
};
/**安装人员导出*/
export let getOutInstall = data => {
    return Http.post(`/api/files/excel/installer`,qs.stringify(data),{
        responseType: "blob"
    });
};
/**供应商导出*/
export let getOutSupply = data => {
    return Http.post(`/api/files/excel/supplier`,qs.stringify(data),{
        responseType: "blob"
    });
};
/**付款管理导出*/
export let getOutPayfor = data => {
    return Http.post(`/api/files/excel/finance`,qs.stringify(data),{
        responseType: "blob"
    });
};
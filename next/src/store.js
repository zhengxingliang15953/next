import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { getOrderNumber } from '../src/api';


export default new Vuex.Store({
    state: {
        orderNumber: {}
    },
    mutations: {
        updateOrderNumber(state, n) {
            state.orderNumber = n;
        }
    },
    actions: {
        updateOrderNumberAction(context) {//修改订单审核和订单管理的红点状态
            getOrderNumber().then(data => {
                context.commit('updateOrderNumber',data.data);
            });
        }
    },
    getters: {

    },
})
import { refundList } from "../services/listdetail";
import { orders } from "../services/list";
import { goodsCheck } from "../services/listdetail";
import { Toast } from "antd-mobile";

export default {

    namespace: 'listdetail',

    state: {
        id: '',
        name: '',
        phone: '',
        store: '',
        result: '',
        list: [],
        footer: {},
        value: 0
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            history.listen(({ pathname }) => {
                const address = pathname.includes('/listdetail/');
                const id = pathname.substr(12);

                if (address) {
                    dispatch({
                        type: 'fetch',
                        payload: id
                    });
                }
            });
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            const { data } = yield call(orders, payload);
            yield put({ type: 'save', payload: data});
        },

        *goods({ payload }, { call, put }) {  // eslint-disable-line
            const { data } = yield call(goodsCheck, payload);
            yield put({ type: 'saveChange', payload: data });
        },

        *refund({ payload }, { call, put }) {
            const { data } = yield call(refundList);
            if(data) {
                console.log(1);
            }
        }
    },

    reducers: {
        save(state, action) {  
            return { ...state, ...action.payload };
        },
        saveChange(state, action) {
            Toast.info('已确认收货', 1);
            return { ...state, ...action.payload };
        },
    },

};
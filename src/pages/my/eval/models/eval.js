import { evals } from "../services/eval";
import { Toast } from 'antd-mobile';
import { routerRedux } from 'dva/router';

export default {

    namespace: 'eval',

    state: {
       url: ''
    },
     subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                const address = pathname.includes('/eval/');
                // console.log(state);
                if (address) {
                     dispatch({
                       type: 'url',
                       payload: pathname
                     });
                }
            });
        }
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(evals, payload);
            console.log(data,1);
              
            if(data.data.message) {
                Toast.info('评价成功', 1);
                yield put(routerRedux.push('/list'));
            } else {
                Toast.info('你还未收到货物不能评价', 1);
            }
            
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        url(state, { payload }) {
            return { ...state, url: payload}
        }
    },

};
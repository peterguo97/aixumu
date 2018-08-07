import { address } from "../services/address";
import { staticAddress } from "../services/address";
import { deleteList } from "../services/address";

export default {

    namespace: 'address',

    state: {
        data: [
            // { name: '刘鑫', phone: '188', address: '河南省', id: '2'}
        ]
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                console.log(1);
                
                if (pathname === '/address') {
                    dispatch({
                        type: 'fetch',
                        payload: 'getAddress'
                    });
                }
            });
        }
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            const { data } = yield call(address, payload);
            yield put({ type: 'save', payload: data })
        },
        *staticaddress( { payload }, { call, put }) {          
            yield call(staticAddress, {id: payload.id, staticaddress: payload.staticaddress});
            yield put({ type: 'change', payload: payload })
        },
        *deleteChange( { payload }, { call, put }) {        
            const message = yield call(deleteList, payload.datas);
            if(message.data.message) {
                 yield put({ type: 'change', payload: { data: payload.data} });
            }  
        }
    },

    reducers: {
        save(state, action) { 
            return { ...state, ...action.payload };
        },
        change(state, { payload }) {
            return { ...state, ...payload };
        }
    },

};
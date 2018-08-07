import { hasItem } from '../publicapi';

export default {

    namespace: 'detail',

    state: {
        showlist: false,
        list: [],
        page:  0,
        goodsdata: {}
    },

    subscriptions: {

      setup({ dispatch, history }) {
           history.listen(({ pathname }) => {
                const address = pathname.includes('/detail');
                if (address) {        
                    dispatch({
                        type: 'changePage',
                        payload: {page: 0}
                    });
                }
            }); // eslint-disable-line
      }
    },

    effects: {
      *fetch({ payload }, { call, put }) {  // eslint-disable-line
        yield put({
            
        });
      }
    },

    reducers: {
        addTolist(state, { payload }){
            const list = state.list;
            let judge = hasItem(list, payload, 'id');
            if (judge) {
                let recentlist = JSON.parse(JSON.stringify(list));
                for (let index = 0; index < recentlist.length; index++) {
                    const element = recentlist[index];
                    if (element.id === payload.id){
                        element.num++;
                        break;
                    }
                }
                return Object.assign({},state,{list: recentlist});
            }
            else {
                payload.num = 1;
                let recentlist = [ ...state.list, payload ];
                return Object.assign({}, state, { list: recentlist });
            }
        },

        clearAll(state, { payload }){
            let obj = {
                showlist: false,
                list: [],
                page: 0,
                goodsdata: {}
            }
            return Object.assign({},state,obj);
        },

        decreaseFromlist(state, {payload}){
            const list =JSON.parse(JSON.stringify(state.list));
            let recentlist = list.filter((item)=>{
                if ( item.id === payload.id ){
                    item.num--;
                }
                if( item.num === 0){
                    return false;
                }
                else{
                    return true;
                }
            })
            return Object.assign({}, state, { list: recentlist });
        },

        changePage(state,{payload}){
            let page = payload.page;
            
            return Object.assign({},state,{page: page});
        },

        goodsDetail(state,{payload}){
            const data = payload.data;
            return Object.assign({},state,{goodsdata: data})
        },

        showOrNotShow(state,{payload}){
            let temp = state.showlist;
            if(temp){
                temp = false;
            }
            else{
                temp = true;
            }
            return Object.assign({}, state, {showlist: temp});
        }
    }
};
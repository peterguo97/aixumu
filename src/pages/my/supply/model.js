export default {
    namespace: 'supply',
     state: {
        message: '',
        title: ''
    },
    reducers: {
        change(state, action) {
            return { ...state, ...action.payload };
        }
    },
}
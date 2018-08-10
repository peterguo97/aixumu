export default {
    plugins: [
         'umi-plugin-dva', [
            'umi-plugin-routes',
            {
                exclude: [
                    /model\.(j|t)sx?$/,
                    /service\.(j|t)sx?$/,
                    /models\//,
                    /components\//,
                    /services\//,
                ],
            },
        ],
    ],
    routes: [
        { path: '/', exact: true, component: 'IndexPage' },
        { path: '/:id/detail', component: './my/$detail/detail' },
        { path: '/search/:value', component: './my/search/$SearchResult' },
        { path: '/feed', component: 'Feed' },
        { path: '/dongbao', component: 'Dongbao' },
        { path: '/supply', component: './my/supply/supply' },
        { path: '/message', component: './my/supply/message' },
        { path: '/find', component: 'Find' },
        { path: '/user', component: 'Users' },
        { path: '/list', component: './my/list/ShoppingList' },
        { path: '/order/:payment', component: './my/list/$Order' },
        { path: '/listdetail/:id', component: './my/list/$ListDetail' },
        { path: '/eval/:id', component: './my/eval/$Eval' },
        { path: '/shopping', component: './my/shopping/Shopping' },
        { path: '/address', component: './my/address/Address'},
        { path: '/write/:id/:payment?', component: './my/address/$WriteAddress$'},
        { path: '/beuser', component: './my/beuser/Beuser' },
        { path: '/member', component: './my/member/Member' },
        { path: '/rule', component: './my/member/Rule' },
        { path: '/aboutus', component: './my/aboutus/Aboutus' },
        { path: '/connect', component: './my/connect/connect' },
    ],
    context: {
        title: '爱畜牧'
    },
    hashHistory: true
};
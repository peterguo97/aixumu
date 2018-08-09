import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('../IndexPage').default
  },
  {
    "path": "/:id/detail",
    "component": require('../my/$detail/detail').default,
    "exact": true
  },
  {
    "path": "/search/:value",
    "component": require('../my/search/$SearchResult').default,
    "exact": true
  },
  {
    "path": "/supply",
    "component": require('../my/supply/supply').default,
    "exact": true
  },
  {
    "path": "/message",
    "component": require('../my/supply/message').default,
    "exact": true
  },
  {
    "path": "/find",
    "component": require('../Find').default,
    "exact": true
  },
  {
    "path": "/user",
    "component": require('../Users').default,
    "exact": true
  },
  {
    "path": "/list",
    "component": require('../my/list/ShoppingList').default,
    "exact": true
  },
  {
    "path": "/order/:payment",
    "component": require('../my/list/$Order').default,
    "exact": true
  },
  {
    "path": "/listdetail/:id",
    "component": require('../my/list/$ListDetail').default,
    "exact": true
  },
  {
    "path": "/eval/:id",
    "component": require('../my/eval/$Eval').default,
    "exact": true
  },
  {
    "path": "/shopping",
    "component": require('../my/shopping/Shopping').default,
    "exact": true
  },
  {
    "path": "/address",
    "component": require('../my/address/Address').default,
    "exact": true
  },
  {
    "path": "/write/:id/:payment?",
    "component": require('../my/address/$WriteAddress$').default,
    "exact": true
  },
  {
    "path": "/beuser",
    "component": require('../my/beuser/Beuser').default,
    "exact": true
  },
  {
    "path": "/member",
    "component": require('../my/member/Member').default,
    "exact": true
  },
  {
    "path": "/rule",
    "component": require('../my/member/Rule').default,
    "exact": true
  },
  {
    "path": "/aboutus",
    "component": require('../my/aboutus/Aboutus').default,
    "exact": true
  },
  {
    "path": "/connect",
    "component": require('../my/connect/connect').default,
    "exact": true
  },
  {
    "path": "/dongbao",
    "component": require('../Dongbao').default,
    "exact": true
  },
  {
    "path": "/feed",
    "component": require('../Feed').default,
    "exact": true
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}

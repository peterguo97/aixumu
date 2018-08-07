import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  ...((require('E:/git/next-food/myapp/aixumu/src/dva.js').config || (() => ({})))()),
});

window.g_app = app;
app.use(createLoading());

app.model({ namespace: 'global', ...(require('E:/git/next-food/myapp/aixumu/src/models/global.js').default) });
app.model({ namespace: 'detail', ...(require('E:/git/next-food/myapp/aixumu/src/pages/my/$detail/models/detail.js').default) });
app.model({ namespace: 'handlestyle', ...(require('E:/git/next-food/myapp/aixumu/src/pages/my/$detail/models/handlestyle.js').default) });
app.model({ namespace: 'list', ...(require('E:/git/next-food/myapp/aixumu/src/pages/my/list/models/list.js').default) });
app.model({ namespace: 'listdetail', ...(require('E:/git/next-food/myapp/aixumu/src/pages/my/list/models/listdetail.js').default) });
app.model({ namespace: 'order', ...(require('E:/git/next-food/myapp/aixumu/src/pages/my/list/models/order.js').default) });
app.model({ namespace: 'eval', ...(require('E:/git/next-food/myapp/aixumu/src/pages/my/eval/models/eval.js').default) });
app.model({ namespace: 'shopping', ...(require('E:/git/next-food/myapp/aixumu/src/pages/my/shopping/models/shopping.js').default) });
app.model({ namespace: 'address', ...(require('E:/git/next-food/myapp/aixumu/src/pages/my/address/models/address.js').default) });
app.model({ namespace: 'write', ...(require('E:/git/next-food/myapp/aixumu/src/pages/my/address/models/write.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;

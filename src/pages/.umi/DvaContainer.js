import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  ...((require('D:/aixumu/src/dva.js').config || (() => ({})))()),
});

window.g_app = app;
app.use(createLoading());

app.model({ namespace: 'global', ...(require('D:/aixumu/src/models/global.js').default) });
app.model({ namespace: 'detail', ...(require('D:/aixumu/src/pages/my/$detail/models/detail.js').default) });
app.model({ namespace: 'handlestyle', ...(require('D:/aixumu/src/pages/my/$detail/models/handlestyle.js').default) });
app.model({ namespace: 'list', ...(require('D:/aixumu/src/pages/my/list/models/list.js').default) });
app.model({ namespace: 'listdetail', ...(require('D:/aixumu/src/pages/my/list/models/listdetail.js').default) });
app.model({ namespace: 'order', ...(require('D:/aixumu/src/pages/my/list/models/order.js').default) });
app.model({ namespace: 'eval', ...(require('D:/aixumu/src/pages/my/eval/models/eval.js').default) });
app.model({ namespace: 'shopping', ...(require('D:/aixumu/src/pages/my/shopping/models/shopping.js').default) });
app.model({ namespace: 'address', ...(require('D:/aixumu/src/pages/my/address/models/address.js').default) });
app.model({ namespace: 'write', ...(require('D:/aixumu/src/pages/my/address/models/write.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;

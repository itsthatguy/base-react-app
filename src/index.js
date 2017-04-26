import React             from 'react';
import ReactDOM          from 'react-dom';
import { AppContainer }  from 'react-hot-loader';
import { createStore }   from 'redux';
import { Provider }      from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Root              from './containers/Root';
import store             from './store';

const rootEl = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    rootEl
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    return render(NextRoot);
  });
}

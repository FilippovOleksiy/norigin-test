import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from 'react-router-config';

import store from './store-init';
import routes from './routes';

const history = createBrowserHistory();
const AppRouter = () => renderRoutes(routes);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <main
          style={{
            height: '100%',
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            maxWidth: '1920px',
            margin: 'auto',
          }}
        >
          <AppRouter />
        </main>
      </Router>
    </Provider>
  );
}

export default App;

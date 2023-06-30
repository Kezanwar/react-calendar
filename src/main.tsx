import React from 'react';
import ReactDOM from 'react-dom/client';

// redux
import { Provider } from 'react-redux';
import { store } from '@app/store/store.ts';

// react-router
import { BrowserRouter } from 'react-router-dom';

// app
import App from './App.tsx';

// styles
import '@app/sass/styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

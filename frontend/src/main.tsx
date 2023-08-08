import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/App.tsx';
import { Provider } from 'react-redux';
import { store } from '@src/store';
import { BrowserRouter } from 'react-router-dom';
import '@src/main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Components/App/App';

import './index.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'overlayscrollbars/overlayscrollbars.css';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
          <App />
 </React.StrictMode>
);

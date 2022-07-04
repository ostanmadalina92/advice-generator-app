import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AdviceState } from './context/adviceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdviceState>
      <App />
    </AdviceState>
  </React.StrictMode>
);

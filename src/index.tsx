import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DashboardProvider } from './hooks/useCalculate';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
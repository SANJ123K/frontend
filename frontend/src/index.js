import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

const msalConfig = {
  auth: {
    clientId: '7d1ba265-cf81-4031-a405-257038e7ed8c', 
    authority: 'https://connectionet.b2clogin.com/connectionet.onmicrosoft.com/B2C_1_siso',
    redirectUri: 'http://localhost:3000', 
    knownAuthorities: ['connectionet.b2clogin.com'],
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

const pca = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);

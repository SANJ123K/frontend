
import React, { useState } from 'react';
import { useMsal } from '@azure/msal-react';

function App() {
  const { instance, accounts } = useMsal();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = async () => {
    if (isLoggingIn) {
      return; 
    }
    setIsLoggingIn(true);
    try {
      await instance.loginPopup({
        scopes: ['https://connectionet.onmicrosoft.com/appnote/read'],
        prompt: 'select_account',
      });
    } catch (error) {
      console.error('Login error:', error);
      console.log('Error details:', JSON.stringify(error, null, 2));
    }
  };
  const logout = () => {
    instance.logoutPopup();
  };

  const isAuthenticated = accounts.length > 0;

  return (
    <div className="App">
      {!isAuthenticated ? (
        <button onClick={login} disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging in...' : 'Login with Azure AD B2C'}
        </button>
      ) : (
        <>
          <h1>Welcome, {accounts[0].username}</h1>
          <button onClick={logout}>Logout</button>
          
        </>
      )}
    </div>
  );
}

export default App;

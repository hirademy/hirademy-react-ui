import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import Theme from './resources/theme';
import Routes from './routes';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider theme={Theme}>
        <Router>
             <Auth0Provider
    domain="dev-cjy63ufb3tsk4sbn.us.auth0.com"
    clientId="4hHIrYkSDn6EvkqrOwbziJrGE3MhN95J"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
            <Routes />
        </Router>
    </ThemeProvider>,
 
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
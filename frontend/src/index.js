import React from 'react'
import ReactDOM from "react-dom"
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import { Auth0ProviderWithHistory } from './auth/auth0-provider-with-history'

function AppWrapper() {
  const {
    isLoading,
    error,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <App />
  )
}


ReactDOM.render(
    // <Auth0Provider 
    //   domain={process.env.REACT_APP_AUTH0_DOMAIN}
    //   audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    //   clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    //   redirectUri={window.location.origin}
    // >
    <Router>
      <Auth0ProviderWithHistory>
          <AppWrapper />
      </Auth0ProviderWithHistory>
    </Router>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

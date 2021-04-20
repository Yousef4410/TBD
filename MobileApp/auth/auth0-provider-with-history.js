import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

export const Auth0ProviderWithHistory = ({children}) => {
    const history = useHistory();
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

    const onRedirectCallback = (appState) => {
        history.push(
            appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.href = "http://localhost:3000/"
        );
    };

    return (
        <Auth0Provider 
        domain={domain}
        clientId={clientID} 
        audience={audience}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
}
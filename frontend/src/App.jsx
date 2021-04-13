// Need to do:
//  - Connect to endpoints
//  - Create basic marketplace for now
//  - Fix landing page and make the buttons needed
//  - Profile page a priority as well
//  - Axios??



import './App.css';
import React, { useEffect, useState } from 'react'
import { Marketplace } from './pages/Marketplace'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Items } from './pages/Items'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MarketNav } from './components/MarketNav'
import { Auth0Context, useAuth0 } from '@auth0/auth0-react'
import axios from 'axios';
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
  const [posts, setPosts] = useState({});
  const { isLoading, error, isAuthenticated, user, getAccessTokenSilently  } = useAuth0()

  useEffect (() => {
    async function exampleApiCallOnLoad() {
      const token = await getAccessTokenSilently();
      console.log(token)
      const options = { headers: { 'Authorization': `Bearer ${token}`}}
      const apiResult = await axios.get('http://localhost:5000/get', options);
      setPosts(apiResult.data);
    }
    exampleApiCallOnLoad();
    console.log('inside')
  }, [getAccessTokenSilently])

  console.log(isLoading, error, isAuthenticated, user)
  return (
    <>
      <span>{JSON.stringify(posts)}</span>
      <br/>
      <Switch>
        <Route path='/' exact component={Landing} />
        <ProtectedRoute path='/marketplace' exact component={Marketplace} />
        <Route path='/about' exact component={About} />
        <ProtectedRoute path='/profile' exact component={Profile} />
        <ProtectedRoute path='/items' exact component={Items} />
      </Switch>
    </>
  );
}

export default App;

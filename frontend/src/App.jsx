// Need to do:
//  - Connect to endpoints
//  - Create basic marketplace for now
//  - Fix landing page and make the buttons needed
//  - Profile page a priority as well
//  - Axios??



import './App.css';
import React from 'react'
import { Marketplace } from './pages/Marketplace'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Items } from './pages/Items'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import ProtectedRoute from './auth/ProtectedRoute';

function App() {
  return(
      <>
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

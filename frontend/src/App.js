// import './App.css';
import React from 'react'
import { Marketplace } from './pages/Marketplace'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Items } from './pages/Items'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import ProtectedRoute from './auth/ProtectedRoute'
import { useAuth0 } from '@auth0/auth0-react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Product } from './pages/Product'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

function App() {
  const { isAuthenticated } = useAuth0();
  
  return(
      <ThemeProvider theme={theme}>
        <Switch>
          {!isAuthenticated ? 
          <Route path='/' exact component={Landing} /> :
          <ProtectedRoute path='/' exact component={Marketplace} /> 
          }
          <Route path='/about' exact component={About} />
          <ProtectedRoute path='/profile' exact component={Profile} />
          <ProtectedRoute path='/items' exact component={Items} />
          {/*<ProtectedRoute path='/Product' exact component={Product} />*/}
        </Switch>
      </ThemeProvider>
  );
}

export default App;

// Need to do:
//  - Connect to endpoints
//  - Create basic marketplace for now
//  - Fix landing page and make the buttons needed
//  - Profile page a priority as well
//  - Axios??



import './App.css';
import React, { useEffect } from 'react'
import { Background } from './components/Background'
import { Navbar } from './components/Navbar'
import { Marketplace } from './pages/Marketplace'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MarketNav } from './components/MarketNav';

// Need to do a bunch of routing here.
// let span = 1
function App() {
  console.log('hello')
  const[span, setSpan] = React.useState(1)
  const span2 = React.useRef(1)

  useEffect (() => {
    console.log('inside')
  }, [span2.current]) 

  return (
    <>
    <Router>
      <MarketNav />
      <span onClick={() => {
        setSpan(span + 1)
        span2.current = span2.current + 1
        console.log(span2.current)
        console.log('hi')
      }}>{ span }</span>
      <Switch>
        <Route path='/home'>
          <span>This is home</span>
        </Route>
        <Route path='/' exact />
      </Switch>
      </Router>
    </>
  );
}

export default App;

// How to show Landing page when logged out but Marketplace when logged in?
// Need to put our logo image instead of typography

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      backgroundColor: 'primary',
    },
    title: {
      flexGrow: 1,
      color: '#ffff'
    },
    customToolbar: {
      background: '#334B68',
    },
    aboutBtn: {
      color: '#fff',
    }
  }));

const AuthButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton/> : <LoginButton/>;
}

export function Navbar() {
  const classes = useStyles()
  const history = useHistory()

  const redirect = () => {
    history.push('/about')
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.customToolbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            TradeU
          </Typography>
          <Button 
          className={classes.aboutBtn}
          onClick={redirect}
          >About</Button>
          <AuthButton/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//  <MenuIcon />
// </IconButton>
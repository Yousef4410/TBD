import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { blueGrey } from '@material-ui/core/colors';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    customToolbar: {
      background: blueGrey[100],
    },
  }));

const AuthButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton/> : <LoginButton/>;
}

export function Navbar() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.customToolbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TradeU
          </Typography>
          <AuthButton/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
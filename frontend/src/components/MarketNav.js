import React from 'react'
import { 
    AppBar, 
  Avatar, 
    Toolbar, 
    Typography, 
 } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { DrawerModified } from './DrawerModified'
import { useAuth0 } from '@auth0/auth0-react'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      backgroundColor: 'primary',
    },
    logo: {
      flexGrow: '1',
      color: '#fff',
    },
    customToolbar: {
      background: '#334B68',
    },
    list: {
        width: 250, 
    },
    fullList: {
        width: 'auto'
    }
  }));

export function MarketNav() {
  const classes = useStyles()
  const { user } = useAuth0()

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.customToolbar}>
        <Toolbar>
          <Typography underline="none" variant="h6" className={classes.logo}>
            <Link to='/' >
              TradeU
            </Link>
          </Typography>
          <Typography className={classes.menuButton}>{user.nickname}</Typography>
          <DrawerModified/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
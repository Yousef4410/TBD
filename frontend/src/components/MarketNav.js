import React from 'react'
import { 
    AppBar, 
    Toolbar, 
    Typography, 
 } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { DrawerModified } from './DrawerModified'

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
    list: {
        width: 250, 
    },
    fullList: {
        width: 'auto'
    }
  }));

export function MarketNav() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.customToolbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to='/marketplace' >
            TradeU logo here
            </Link>
          </Typography>
          <Button>Name here</Button>
          <DrawerModified/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
import React from 'react'
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton,
    List,
    ListItem,
    ListItemText,
    Drawer
 } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
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
  // const [state, setState] = React.useState(false)

  // const toggleDrawer = (open) => (event) => {
  //   setState(open);
  // };
  
//   const itemsList = [{
//     text: 'Home'
//   }, {
//     text: 'My Profile'
//   }, {
//     text: 'My Items'
//   }, {
//     text: 'Log Out'
//   }
// ];
  // Need to connect the items (objects) to their pages!!!
  // using route 
  // const list = () => (
  //   <div
  //     className={classes.list}
  //     role="presentation"
  //     onClick={toggleDrawer(false)}
  //     onKeyDown={toggleDrawer(false)}
  //   >
  //     <List>
  //       {itemsList.map((item, index) => (
  //         <ListItem button key={item}>
  //           <ListItemText primary={item} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.customToolbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to='/' >
            TradeU logo here
            </Link>
          </Typography>
          <Button>Name here</Button>
          <DrawerModified/>
        {/* <IconButton 
        edge="start" 
        className={classes.menuButton} 
        color="inherit" 
        aria-label="menu">
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
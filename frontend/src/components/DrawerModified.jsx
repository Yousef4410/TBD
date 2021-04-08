import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { 
    IconButton,
    List,
    ListItem,
    ListItemText,
    Drawer
 } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

 const useStyles = makeStyles((theme) => ({
    list: {
        width: 250, 
    },
    fullList: {
        width: 'auto'
    }
  }));

export function DrawerModified() {
    const { logout } = useAuth0();
    const classes = useStyles();
    const [state, setState] = React.useState(false)
    const history = useHistory();

    const toggleDrawer = (open) => (event) => {
    setState(open);
    };

    const itemsList = [{
        text: 'Home',
        onClick: () => history.push('/marketplace')
    }, {
        text: 'My Profile',
        onClick: () => history.push('/profile')
    }, {
        text: 'My Items',
        onClick: () => history.push('/items')
    }, {
        text: 'Log Out',
        onClick: () => logout({returnTo: window.location.origin})
    }
    ];

    const list = () => (
        <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        >
        <List>
            {itemsList.map((item, index) => (
            <ListItem button key={item.text} onClick={item.onClick}>
                <ListItemText primary={item.text} />
            </ListItem>
            ))}
        </List>
        </div>
    );
    return (
        <div>
            <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu">
                <MenuIcon onClick={toggleDrawer(true)} />
                <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
                {list()}
                </Drawer>
            </IconButton>
        </div>
    )
}

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

const logo = "https://lh3.googleusercontent.com/vvePel6M3-WSIPS3FlDJCZntH-xdXZjNCPI5UmOD6Ot5W_0DGngCPbjOlSHFoMAdii6De05NXMBpyiDJYhtak9dIPQ7CAA1uwiD31lDNvzeEPTk2WgmyybLhzRwJeKGUokpgnkl_yuQxu_ZW5jRw__P7RdQFRMUMLjUvk0mJFMKuHPpnLU9PxNHUIqeUOxDZq9SfV_sCjsbCmXMDjXSLCEXb84eiLKp-f6NtjWIS_fo36FMTwE5hYW695QB9ii7nbH3WRWS4Ly6i_p5c3pmMuSZ1QFQrF2RU-OHlH4fJd5NrbekaV9YQkv3toDIdZD9VRVyZbALoZbLEoIRqpI1iWfljXZaBbOnsuoiW8LrySFbP9_S9Y8GCu1aqhgCVjQPtX3Gn_-Z0myn1jeUXvy8IOYHt9QJ2rpslnG_opmOLn6uF3cDdkypqWu9kFcFDM6dElGclEipqfHcqxFG2GBvKBiYTib7p6wrJiYLZK-wJcs38OaJSoNsQ6buZsQs3K8xF3cRe7CyI4t17YWuwvaFZNnfQ_53KZrOeThcYhOBOK85zbtx8U3DRM6TU1tBwCPS_LddBdZmg1eSKNMQXUaVWX8bAidRTbyj8nok-rFY35ukWUx99a9qZ4FKqH-5MJDtuKBxtgqar_0KgydsrdtDdu4R4_adKN4lJA62KZlfFk2lY_lngth90yN-7ug91YG7mcnlXtvOA35qyuWojQfd9NhuA=s500-no?authuser=0"

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
      backgroundColor: 'primary',
    },
    logo: {
      flexGrow: "1",
      height: "50px",
      width: "50px"
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
      <AppBar position="static" className={classes.customToolbar}>
        <Toolbar>
          <Typography underline="none" variant="h6" className={classes.logo}>
            <Link to='/' >
              <img className={classes.logo} src={logo} alt="Logo" />
            </Link>
          </Typography>
          <Typography className={classes.menuButton}>{user.nickname}</Typography>
          <DrawerModified/>
        </Toolbar>
      </AppBar>
  );
}
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import bgImage from '../images/bg.jpg'
import { useAuth0 } from '@auth0/auth0-react'

const UseStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#334B68',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: 'calc(100vh - 64px)',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      objectFit: 'contain',
      zIndex: '-1',
    },
    vector: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'repeat',
      backgroundSize: '60%',
      clipPath: 'polygon(28% 0, 58% 0, 32% 100%, 0 100%, 0 30%)',
    },
    header: {
      color: '#fff',
      fontSize: '3vw',
      marginLeft: '50vw',
      marginTop: '30vw',
      width: '40vw',
    },
    subheader: {
      color: '#fff',
      fontSize: '1.5vw',
      marginLeft: '50vw',
      marginTop: '35vw',
      position: 'absolute',
      width: '40vw',
    },
    btn: {
      marginLeft: '30vw',
      marginTop: '42vw',
      position: 'absolute',
      width: '20vw',
      backgroundColor: '#0E788F',
      color: '#fff'
    },
  }));

export function Background() {
    const { loginWithRedirect } = useAuth0();
    const classes = UseStyles();

    return (
        <div className={classes.root}>
          <div className={classes.vector}></div>
          <Typography className={classes.header}>Start Buying and Selling!</Typography>
          <Typography className={classes.subheader}>TradeU offers a simple and trusted way to buy and 
            sell locally to college students.</Typography>
          <Button 
            variant='contained' 
            className={classes.btn}
            onClick={() => loginWithRedirect()}
            >Join Now</Button>
        </div>
    )
}

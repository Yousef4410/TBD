import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
      boxShadow: "none",
      textTransform: "none",
      fontSize: 16,
      padding: "6px 12px",
      border: "1px solid",
      lineHeight: 1.5,
      backgroundColor: "transparent",
      borderColor: "#56F6E4",
      "&:hover": {
        backgroundColor: "transparent",
        borderColor: "#56F6E4",
        boxShadow: "none"
      },
      "&:active": {
        boxShadow: "none",
        backgroundColor: "#56F6E4",
        borderColor: "#56F6E4"
      }
    }
  })(Button);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const classes = useStyles();

    return (
        <StyledButton variant='contained' color="primary" className={classes.margin} onClick={() => loginWithRedirect()}>
            Sign In
        </StyledButton>
    )
}

export default LoginButton;
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { DrawerModified } from "./DrawerModified";
import { useAuth0 } from "@auth0/auth0-react";
import pic from "../images/logo3.png";

const logo = pic;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "primary",
  },
  logo: {
    flexGrow: "1",
    height: "50px",
    width: "50px",
  },
  customToolbar: {
    background: "#334B68",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export function MarketNav() {
  const classes = useStyles();
  const { user } = useAuth0();

  return (
    <AppBar position="static" className={classes.customToolbar}>
      <Toolbar>
        <Typography underline="none" variant="h6" className={classes.logo}>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="Logo" />
          </Link>
        </Typography>
        <Typography className={classes.menuButton}>{user.nickname}</Typography>
        <DrawerModified />
      </Toolbar>
    </AppBar>
  );
}

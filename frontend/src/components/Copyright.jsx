import { makeStyles, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

export default function Copyright() {
    return (
        <>
        <div align="center">
            <MoreHorizIcon/>
        </div>
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" to="/">
            TradeU
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
      </>
    );
  }
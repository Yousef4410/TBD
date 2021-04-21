import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

let uri = "http://localhost:5000";
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  uri = "http://localhost:5000";
} else if (process.env.NODE_ENV === "production") {
  uri = "https://cop4331-app.herokuapp.com";
}
console.log("URI:" + uri);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10),
    marginTop: "5em",
  },
  media: {
    height: "200px",
  },
  btn: {
    color: "#2C98F0",
  },
  card: {
    backgroundColor: "rgba(86,246,228,.10)",
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    borderRadius: "1.5em",
  },
  divider: {
    margin: theme.spacing(3),
  },
  description: {
    color: "#00000",
    marginBottom: "1em",
    fontFamily: "Poppins",
  },
  price: {
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  font: {
    fontFamily: "Poppins",
  },
}));

export default function MediaCard(prop) {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  // const { getAccessTokenSilently } = useAuth0();

  // useEffect(() => {
  //   (async () => {
  //     const token = await getAccessTokenSilently();
  //     // console.log(token);
  //     const options = { headers: { Authorization: `Bearer ${token}` } };
  //     const apiResult = await axios.get("http://localhost:5000/posts/get", options);

  //     if (prop.data.length){
  //       setPosts(prop.data)
  //     }
  //     else{
  //       setPosts(apiResult.data)
  //     }

  //   })();
  // }, [prop.data, getAccessTokenSilently]);

  return (
    <Grid direction="row" justify="flex-start" container spacing={2}>
      {prop.data.map((post, key) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <Card variant="outlined" className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`data:image/png;base64,${post.image}`}
                />
                <CardContent>
                  <Typography
                    className={classes.font}
                    gutterBottom
                    variant="h5"
                  >
                    {post.title}
                  </Typography>
                  <Typography className={classes.description} variant="body2">
                    {post.description}
                  </Typography>
                  <Typography
                    className={classes.price}
                    variant="body2"
                    color="textSecondary"
                  >
                    $ {post.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" className={classes.btn}>
                  Let's Trade
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

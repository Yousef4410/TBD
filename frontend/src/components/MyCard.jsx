import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Container, Grid } from '@material-ui/core'
import me from '../images/me3.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10),
    marginTop: "5em",
  },
  media: {
    height: "200px",
  },
  btn: {
    color: "#2C98F0"
  },
  card: {
    backgroundColor: "rgba(86,246,228,.10)",
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
    borderRadius: "2em"
  },
  divider: {
    margin: theme.spacing(3)
  },
  description: {
    color: "#00000",
    marginBottom: "1em"
  },
  price: {
    fontWeight: "bold"
  }
}))


export default function MyCard() {
  const classes = useStyles();
  const { user } = useAuth0([])
  const splitStr = user.sub.split("|") // {splitStr[1]}

  const [posts, setPosts] = useState([]);
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    (async () => {
      const token = await getAccessTokenSilently();
      const options = { headers: { 'Authorization': `Bearer ${token}` } }
      const apiResult = await axios.get(`http://localhost:5000/posts/getUser/${splitStr[1]}`, options); // This line is changed per API call, change sub to API name
      setPosts(await apiResult.data)
    })()
  }, [getAccessTokenSilently]);
  console.log(posts.createdBy)

  return (
    <> 
      <Grid
      direction="row"
      justify="flex-start"
      container spacing={2}>
      {posts.map((post, key) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={key}>
            <Card variant="outlined" className={classes.card}>
              <CardActionArea>
                {/* href="http://localhost:3000/items" */}
                <CardMedia
                  className={classes.media}
                  image={`data:image/jpeg;base64,${post.image}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {post.title}
                  </Typography>
                  <Typography className={classes.description} variant="body2">
                    {post.description}
                  </Typography>
                  <Typography className={classes.price} variant="body2" color="textSecondary">
                    $ {post.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" className={classes.btn}>
                  Share
                </Button>
                <Button size="small" className={classes.btn}>
                  Learn More
                      </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
      {/* <Typography align="center" component="h1" variant="h5">
        You haven't posted to our marketplace yet
      </Typography> */}
      </>
  );
}
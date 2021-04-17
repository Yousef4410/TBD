import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { TestData } from '../TestData'
import { Grid } from '@material-ui/core'
import me from '../images/me3.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(10),
    marginTop: "5em",
    minWidth: "200px",
  },
  media: {
    height: "200px",
  },
  btn: {
    color: "#2C98F0"
  },
  card: {
    backgroundColor: "rgba(86,246,228,.10)"
  }
}))


export default function MediCaCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid 
        direction="row"
        justify="flex-start"
        alignItems="center"
        container spacing={2}>
          {TestData.map((data, key) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={key}>
                <Card variant="outlined" className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={me}
                    />
                      <CardContent>
                      <Typography gutterBottom variant="h5">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary"s>
                        {data.contactinfo}
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
    </div>
  );
}
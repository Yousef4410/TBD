import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TestData } from '../TestData'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    minWidth: "200px",
  },
  media: {
    height: 140,
  },
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
              <Grid item xs={12} sm={6} md={4} key={key}>
                <Card variant="outlined">
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/contemplative-reptile.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5">
                        {data.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary"s>
                        {data.contactinfo}
                      </Typography>
                      <Button size="small" color="primary">
                        Share
                      </Button>
                      <Button size="small" color="primary">
                        Learn More
                      </Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              );
          })}
      </Grid>
    </div>
  );
}
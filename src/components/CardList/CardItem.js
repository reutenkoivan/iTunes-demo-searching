import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: 250
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  price: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  }
});

class CardItem extends Component {
  render() {
    const { classes } = this.props;
    const isFavorite = false

    return (
      <Grid item >
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Song Name
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Artist name
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="Play">
                <PlayArrowIcon/>
              </IconButton>
              <IconButton aria-label="Add-to-favorite">
                <FavoriteIcon/>
              </IconButton>

              {isFavorite
                ? <Link href="#" target="_blank">
                  <Typography className={classes.price} variant="subtitle1" color="textSecondary">
                    Look on iTunes
                  </Typography>
                </Link>
                : <Typography className={classes.price} variant="subtitle1" color="textSecondary">
                    price: 12$
                  </Typography>
              }
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Live from space album cover"
          />
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(CardItem);

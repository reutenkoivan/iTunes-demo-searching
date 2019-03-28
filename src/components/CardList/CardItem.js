import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Pause from "@material-ui/icons/PauseCircleFilled"
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({

  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%"
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
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

  state = {
    favoriteButtonColor: "primary",
    soundState: false
  };

  audio = new Audio(this.props.song.previewUrl);

  switchSoundState = () => {
    if(!this.state.soundState){
      this.setState({ soundState: true });
      this.audio.play()
    } else {
      this.setState({ soundState: false });
      this.audio.pause()
    }

    this.props.addSongToPlayer(this.props.song.previewUrl);

    if(!this.state.soundState){
      setInterval(()=>{
        if(this.audio.ended) {
          this.setState({ soundState: !this.audio.ended });
          clearInterval()
        }
      },1000)} else clearInterval()
  };

  componentDidMount() {
    if(this.props.song.isFavorite)
      this.setState({favoriteButtonColor: "error"})
  }

  switchFavoriteState = () => {
    this.props.switchFavoritesState(this.props.song);
    this.props.song.isFavorite
      ? this.setState({favoriteButtonColor: "error"})
      : this.setState({favoriteButtonColor: "primary"})
  };

  render() {
    const { classes, song } = this.props;

    return (
      <Grid item xs={12}>
        <Card className={classes.card} title={song.collectionName}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {song.trackName}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {song.artistName}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton onClick={this.switchSoundState} aria-label={this.state.soundState ? "Pause": "Play"}>
                {this.state.soundState
                  ? <Pause color="primary"/>
                  : <PlayArrowIcon color="primary"/>
                }
              </IconButton>
              <IconButton onClick={this.switchFavoriteState} aria-label="Add-to-favorite">
                <FavoriteIcon color={this.state.favoriteButtonColor} />
              </IconButton>

              {song.isFavorite
                ? <Link href={song.artistViewUrl} target="_blank">
                  <Typography className={classes.price} variant="subtitle1" color="textSecondary">
                    Look on iTunes
                  </Typography>
                </Link>
                : <Typography className={classes.price} variant="subtitle1" color="textSecondary">
                  {song.trackPrice}$
                </Typography>
              }
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image={song.artworkUrl}
          />
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(CardItem);

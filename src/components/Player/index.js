import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Pause from "@material-ui/icons/Pause"
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    }
  },
  songInfo:{
    position: "absolute"
  },
  toolbar:{
    display: 'flex',
    alignItems: 'center',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
  }
});

class Player extends Component {

  switchSoundState = () => {
    const typeOfPage = this.props.history.location.pathname.substring(1);
    const {favorites, songs} = this.props.track;
    const {favoritesSongs, searchingSongs, playerInfo} = this.props;

    if(playerInfo.artistName) {

      favorites.length
        ? this.props.addSongToPlayer(favorites[0], favoritesSongs)
        : this.props.addSongToPlayer(songs[0], searchingSongs);

    } else if(typeOfPage === "favorites" && favoritesSongs[0]){
        this.props.addSongToPlayer(favoritesSongs[0], favoritesSongs)
    } else if(!typeOfPage && searchingSongs[0])
      this.props.addSongToPlayer(searchingSongs[0], searchingSongs)
  };

  playNext = () => {
    let { playlist, index, artistName } = this.props.playerInfo;

    index = index === playlist.length-1 ? 0 : index+1;
    if(artistName && playlist.length !== 1)
      this.props.addSongToPlayer(playlist[index], playlist)
  };

  playPrevious = () => {
    let { playlist, index, artistName } = this.props.playerInfo;

    index = index === 0 ? playlist.length : index;
    if(artistName && playlist.length !== 1)
      this.props.addSongToPlayer(playlist[index-1], playlist)
  };

  render(){
    const { classes, playerInfo} = this.props;
    return (
      <AppBar color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.songInfo}>
            <Typography className={classes.title} variant="h5" color="inherit" noWrap>
              {playerInfo.trackName}
            </Typography>
            <Typography className={classes.title} variant="h6" color="secondary" noWrap>
              {playerInfo.artistName}
            </Typography>
          </div>
          <div className={classes.controls}>
            <IconButton onClick={this.playPrevious} color="secondary" aria-label="Previous">
              <SkipPreviousIcon />
            </IconButton>
            <IconButton
              onClick={this.switchSoundState}
              aria-label={playerInfo.isPlaying
                ? "Pause"
                : "Play"
              }
            >
              {playerInfo.isPlaying
                ? <Pause color="secondary"/>
                : <PlayArrowIcon color="secondary"/>
              }
            </IconButton>
            <IconButton onClick={this.playNext} color="secondary" aria-label="Next">
              <SkipNextIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Player);

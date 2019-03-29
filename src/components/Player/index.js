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

    if(this.props.playerInfo.artistName) {

      this.props.track.favorites.length
        ? this.props.addSongToPlayer(this.props.track.favorites[0], this.props.favoritesSongs)
        : this.props.addSongToPlayer(this.props.track.songs[0], this.props.searchingSongs);

    } else if(typeOfPage === "favorites" && this.props.favoritesSongs[0]){
        this.props.addSongToPlayer(this.props.favoritesSongs[0], this.props.favoritesSongs)
    } else if(!typeOfPage && this.props.searchingSongs[0])
      this.props.addSongToPlayer(this.props.searchingSongs[0], this.props.searchingSongs)
  };

  playNext = () => {
    let { playlist, index } = this.props.playerInfo;
    index = index === this.props.playerInfo.playlist.length-1 ? 0 : index+1;
    if(this.props.playerInfo.artistName && this.props.playerInfo.playlist.length !== 1)
      this.props.addSongToPlayer(playlist[index], playlist)
  };

  playPrevious = () => {
    let { playlist, index } = this.props.playerInfo;
    index = index === 0 ? this.props.playerInfo.playlist.length : index;
    if(this.props.playerInfo.artistName && this.props.playerInfo.playlist.length !== 1)
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
              aria-label={  playerInfo.isPlaying
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

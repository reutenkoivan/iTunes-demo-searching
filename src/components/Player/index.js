import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
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
})

function Player(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.songInfo}>
            <Typography className={classes.title} variant="h5" color="inherit" noWrap>
              Song name
            </Typography>
            <Typography className={classes.title} variant="h6" color="secondary" noWrap>
              Artist
            </Typography>
          </div>
          <div className={classes.controls}>
            <IconButton color="secondary" aria-label="Previous">
              <SkipPreviousIcon />
            </IconButton>
            <IconButton color="secondary" aria-label="Play">
              <PlayArrowIcon/>
            </IconButton>
            <IconButton color="secondary" aria-label="Next">
              <SkipNextIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Player);
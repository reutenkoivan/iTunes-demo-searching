import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableTemporaryDrawer from "../Menu/SwipeableTemporaryDrawer"


const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 250,
      },
    },
  },
});

class Menu extends Component {
  state = {
    isOpen: false,
    inputValue: ""
  };

  searchingValue = e => {
    const linkParams = e.target.value.trim().split(/\s+/).join("+")
    this.props.getSongs(linkParams)
    this.setState({inputValue: linkParams})
  }

  toggleDrawer = open => () => {
    this.setState({
      isOpen: open,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={this.toggleDrawer(true)} className={classes.menuButton} color="inherit" aria-label="Open drawer">
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                Searching songs
              </Typography>
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  onChange={this.searchingValue}
                  placeholder="Songs..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <SwipeableTemporaryDrawer isOpen={this.state.isOpen} toggleDrawer={this.toggleDrawer}/>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Menu);
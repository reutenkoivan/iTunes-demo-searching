import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Favorite from "@material-ui/icons/Favorite"
import SearchIcon from '@material-ui/icons/Search';
import DeleteForever from "@material-ui/icons/DeleteForever"
import PropTypes from "prop-types";

const styles = {
  list: {
    width: 250,
  }
};

class SwipeableTemporaryDrawer extends React.Component {

  toggleDrawer = open => this.props.toggleDrawer(open);
  clearStorage = () => {
    this.props.favorites.forEach(song => this.props.switchFavoritesState(song));
    localStorage.removeItem("iTunesApp");
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <SwipeableDrawer
          open={this.props.isOpen}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <div className={classes.list}>
              <List>
                <Link component={RouterLink} to="/">
                  <ListItem button >
                    <SearchIcon/>
                    <ListItemText primary={"Search"} />
                  </ListItem>
                </Link>
                <Link component={RouterLink} to="/favorites">
                  <ListItem button >
                    <Favorite />
                    <ListItemText primary={"Favorites"} />
                  </ListItem>
                </Link>
                <Divider />
                <Link
                  component={RouterLink}
                  onClick={this.clearStorage}
                  to="/"
                >
                  <ListItem button >
                    <DeleteForever />
                    <ListItemText primary={"Clear favorites"} />
                  </ListItem>
                </Link>
              </List>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object,
  toggleDrawer: PropTypes.func,
  favorites: PropTypes.array,
  switchFavoritesState: PropTypes.func
};

export default withStyles(styles)(SwipeableTemporaryDrawer);

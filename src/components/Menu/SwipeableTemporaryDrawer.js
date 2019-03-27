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
import HomeIcon from "@material-ui/icons/Home"

const styles = {
  list: {
    width: 250,
  }
};

class SwipeableTemporaryDrawer extends React.Component {

  toggleDrawer = open => this.props.toggleDrawer(open);

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
                    <HomeIcon/>
                    <ListItemText primary={"Home"} />
                  </ListItem>
                </Link>
                <Link component={RouterLink} to="/favorites">
                  <ListItem button >
                    <Favorite />
                    <ListItemText primary={"Favorites"} />
                  </ListItem>
                </Link>
              </List>
              <Divider />
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(SwipeableTemporaryDrawer);

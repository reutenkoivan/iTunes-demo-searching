import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardList from "../CardList"

class Favorites extends Component {
  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <Grid container spacing={16}>
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              xs={12}
              spacing={24}>
              <CardList/>
            </Grid>
          </Grid>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default Favorites;

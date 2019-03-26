import React, { Component } from "react";
import CardList from "../CardList/index"
import Grid from "@material-ui/core/Grid";

class SearchingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid container spacing={16}>
          <Grid
            item
            container
            direction="row"
            alignItems="center"
            xs={12}
            spacing={24}>
            <CardList />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default SearchingPage;

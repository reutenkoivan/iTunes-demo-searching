import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardList from "../CardList"

class Favorites extends Component {
  // componentDidMount() {
  //   // const link = `https://itunes.apple.com/lookup?id=${"trackId"}&entity=song`
  //   const favorites = localStorage.getItem("iTunseApp");
  //   this.props.fetchFavoriteSongs(favorites);
  // }

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
              <CardList songs={this.props.songs}/>
            </Grid>
          </Grid>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default Favorites;

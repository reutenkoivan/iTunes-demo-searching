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
            <Grid
              container
              direction="row"
              alignItems="center"
              spacing={8}>
              <CardList songs={this.props.songs}/>
            </Grid>
      </React.Fragment>
    );
  }
}

export default Favorites;

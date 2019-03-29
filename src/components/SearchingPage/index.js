import React from "react";
import CardList from "../CardList/index"
import Grid from "@material-ui/core/Grid";

const SearchingPage = props => (
  <Grid container
        direction="row"
        alignItems="center"
        spacing={8}>
    <CardList favorite={false} songs = {props.songs}/>
  </Grid>
)

export default SearchingPage;

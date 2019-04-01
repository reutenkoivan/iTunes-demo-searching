import React from "react";
import CardList from "../CardList/index"
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const SearchingPage = props => (
  props.songs.length
    ? <Grid
      item
      xs={12}
    >
      <CardList favorite={false} songs = {props.songs}/>
    </Grid>
    : <Typography omponent="h2" variant="h4" color="secondary" gutterBottom align="center">
      For searching write in input field
    </Typography>
);

SearchingPage.propTypes = {
  songs: PropTypes.array
};

export default SearchingPage;

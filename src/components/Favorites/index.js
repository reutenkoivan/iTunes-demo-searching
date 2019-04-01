import React from "react";
import Grid from "@material-ui/core/Grid";
import CardList from "../CardList"
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

const Favorites = props => {
  return (
    props.favorites.length
      ? <Grid item xs={12}>
        <CardList isfavorite songs={props.favorites}/>
      </Grid>
      : <Typography omponent="h2" variant="h4" color="secondary" gutterBottom align="center">
        You don't have favorites yet
      </Typography>
  )};

Favorites.propTypes = {
  favorites: PropTypes.array,
  favorite: PropTypes.bool
};

export default Favorites;

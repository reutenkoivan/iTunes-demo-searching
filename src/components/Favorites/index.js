import React from "react";
import Grid from "@material-ui/core/Grid";
import CardList from "../CardList"
import PropTypes from 'prop-types';

const Favorites = props => {
    return (
            <Grid
              container
              direction="row"
              alignItems="center"
              spacing={8}>
              <CardList isfavorite songs={props.favorites}/>
            </Grid>
    );
  };

Favorites.propTypes = {
  favorites: PropTypes.array,
  favorite: PropTypes.bool
};

export default Favorites;

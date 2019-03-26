import { combineReducers } from "redux";
import addToFavorite from "./addToFavorite"
import songs from "./songs"

const reducer = combineReducers({addToFavorite, songs});
export default reducer
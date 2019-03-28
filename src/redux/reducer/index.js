import { combineReducers } from "redux";
import addToFavorite from "./addToFavorite"
import songs from "./songs"
import currentSong from "./currentSong"

const reducer = combineReducers({currentSong, songs, addToFavorite});
export default reducer
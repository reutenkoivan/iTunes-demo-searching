import { combineReducers } from "redux";
import favorites from "./favorites"
import songs from "./songs"
import playerInfo from "./playerInfo"

const reducer = combineReducers({playerInfo, songs, favorites});
export default reducer
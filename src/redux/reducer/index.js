import { combineReducers } from "redux";
import favorites from "./favorites"
import songs from "./songs"
import playerInfo from "./playerInfo"
import rootPath from "./rootPath";

const reducer = combineReducers({playerInfo, songs, favorites, rootPath});
export default reducer
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import fetchVideosReducer from "./fetchVideosReducer";
import fetchVideoIndexReducer from "./fetchVideoIndexReducer";

export default combineReducers({
	form: formReducer,
	videos: fetchVideosReducer,
	currentVideo: fetchVideoIndexReducer
});

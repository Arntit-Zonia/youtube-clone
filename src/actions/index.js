import youtube from "../api/youtube";
import { FETCH_VIDEOS, FETCH_VIDEO_INDEX } from "../types";

export const fetchVideos = (value) => async (dispatch) => {
	const KEY = "AIzaSyCDRq6ohA6Ka3PGJrCk4wuiX1niCm-gFxU";

	const response = await youtube.get("search/", {
		params: {
			part: "snippet",
			q: value,
			key: KEY
		}
	});
	dispatch({ type: FETCH_VIDEOS, payload: response });
};

export const fetchVideoIndex = (index) => {
	return {
		type: FETCH_VIDEO_INDEX,
		payload: index
	};
};

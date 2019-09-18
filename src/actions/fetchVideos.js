import youtube from "../api/youtube";

export const fetchVideos = (value) => async (dispatch) => {
	const KEY = "AIzaSyChpQtYJFrs4iRFRFOx0lCWnSzKlTYAXZA";

	const response = await youtube.get("search/", {
		params: {
			part: "snippet",
			q: value,
			key: KEY
		}
	});

	dispatch({ type: "FETCH_VIDEOS", payload: response });
};

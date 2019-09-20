import { FETCH_VIDEO_INDEX } from "../types";

const fetchVideoIndexReducer = (state = 0, action) => {
	switch (action.type) {
		case FETCH_VIDEO_INDEX:
			return action.payload;
		default:
			return state;
	}
};

export default fetchVideoIndexReducer;

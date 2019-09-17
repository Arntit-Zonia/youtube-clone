import React from "react";
import VideoList from "./VideoList";
import VideoScreen from "./VideoScreen";
import SearchInput from "./SearchInput";

const App = () => {
	return (
		<div>
			<SearchInput />
			<VideoScreen />
			<VideoList />
		</div>
	);
};

export default App;

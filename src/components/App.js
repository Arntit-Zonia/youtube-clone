import React from "react";
import VideoList from "./VideoList";
import VideoScreen from "./VideoScreen";
import SearchInput from "./SearchInput";
import "../styles.css";

const App = () => {
	return (
		<div className="app">
			<SearchInput />
			<div className="components">
				<VideoScreen />
				<VideoList />
			</div>
		</div>
	);
};

export default App;

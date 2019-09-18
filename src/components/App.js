import React from "react";
import VideoList from "./VideoList";
import VideoScreen from "./VideoScreen";
import SearchInput from "./SearchInput";

const App = () => {
	return (
		<div className="container">
			<SearchInput />
			<div className="row">
				<div className="col md 6 d-inline-block">
					<VideoScreen />
				</div>
				<div className="col md 6 d-inline-block">
					<VideoList />
				</div>
			</div>
		</div>
	);
};

export default App;

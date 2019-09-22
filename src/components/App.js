import React from "react";
import VideoList from "./VideoList";
import VideoScreen from "./VideoScreen";
import SearchInput from "./SearchInput";
import "../styles.css";

const App = () => {
	return (
		<div className="app container-fluid">
			<SearchInput />
			<div className="row">
				<div className="col-12 col-lg-8">
					<VideoScreen />
				</div>
				<div className="col-lg-4 d-flex justify-content-md-end justify-content-center">
					<VideoList />
				</div>
			</div>
		</div>
	);
};

export default App;

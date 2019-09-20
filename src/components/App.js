import React, { useState } from "react";
import VideoList from "./VideoList";
import VideoScreen from "./VideoScreen";
import SearchInput from "./SearchInput";

const App = () => {
	const [index, setIndex] = useState(0);

	const getIndex = (i) => {
		setIndex(i);
	};

	return (
		<div>
			<SearchInput />
			<div className="justify-content-between">
				<div className="row">
					<div className="col md 6 d-inline-block">
						<VideoScreen index={index} />
					</div>
					<div className="col md 6 d-inline-block">
						<VideoList getIndex={getIndex} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

import React from "react";
import { connect } from "react-redux";

const VideoScreen = ({ videos, currentVideo }) => {
	const renderDefaultVideo = () => {
		if (videos.length !== 0) {
			return (
				<div>
					<p className="lead">
						{videos[0].data.items[currentVideo].snippet.title}
					</p>
					<iframe
						title="video"
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${videos[0].data.items[currentVideo].id.videoId}`}
						allow="fullscreen"
					></iframe>
					<p>
						{videos[0].data.items[currentVideo].snippet.description}
					</p>
				</div>
			);
		}
	};

	return <div>{renderDefaultVideo()}</div>;
};

const mapStateToProps = (state) => {
	return { videos: state.videos, currentVideo: state.currentVideo };
};

export default connect(mapStateToProps)(VideoScreen);

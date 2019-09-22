import React from "react";
import { connect } from "react-redux";

const VideoScreen = ({ videos, currentVideo }) => {
	const renderDefaultVideo = () => {
		if (videos.length !== 0) {
			return (
				<div className="video-screen">
					<p className="video-screen-title lead">
						{videos[0].data.items[currentVideo].snippet.title}
					</p>
					<div className="iframe-container embed-responsive embed-responsive-16by9 w-auto">
						<iframe
							className="rounded embed-responsive-item"
							title="video"
							src={`https://www.youtube.com/embed/${videos[0].data.items[currentVideo].id.videoId}`}
							allow="fullscreen"
						></iframe>
					</div>
					<p className="video-screen-description lead">
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

import React from "react";
import { connect } from "react-redux";

const VideoScreen = (props) => {
	const renderDefaultVideo = () => {
		if (props.videos.length !== 0) {
			return (
				<div>
					<p className="lead">
						{props.videos[0].data.items[0].snippet.title}
					</p>
					<iframe
						title="Video"
						width="560"
						height="315"
						src={`https://www.youtube.com/embed/${props.videos[0].data.items[0].id.videoId}`}
						// frameborder="0"
						allow="fullscreen"
						// allowfullscreen
					></iframe>
					<p>{props.videos[0].data.items[0].snippet.description}</p>
				</div>
			);
		}
	};

	return <div>{renderDefaultVideo()}</div>;
};

const mapStateToProps = (state) => {
	return { videos: state.videos };
};

export default connect(mapStateToProps)(VideoScreen);

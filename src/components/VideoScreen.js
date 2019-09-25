import React from "react";
import { connect } from "react-redux";
import decode from "unescape";

const VideoScreen = ({ videos, currentVideo }) => {
	const renderDefaultVideo = () => {
		if (videos.length && videos[0].data.pageInfo.totalResults) {
			return (
				<div className="video-screen">
					<p className="video-screen-title lead">
						{decode(
							videos[0].data.items[currentVideo].snippet.title,
							"all"
						)}
					</p>
					<div className="iframe-container embed-responsive embed-responsive-16by9 w-auto">
						<iframe
							className="rounded embed-responsive-item"
							title="video"
							src={`https://www.youtube.com/embed/${videos[0].data.items[currentVideo].id.videoId}`}
							allow="fullscreen"
						></iframe>
					</div>
					<p className="video-screen-description">
						{decode(
							videos[0].data.items[currentVideo].snippet
								.description,
							"all"
						)}
					</p>
				</div>
			);
		}
		return (
			<div
				style={{ marginTop: 200, marginLeft: 550 }}
				className="d-flex justify-content-center"
			>
				<h1>No results found!</h1>
				<i className="fas fa-exclamation-triangle mx-2 fa-3x ml-3"></i>
			</div>
		);
	};

	return <div>{renderDefaultVideo()}</div>;
};

const mapStateToProps = (state) => {
	return { videos: state.videos, currentVideo: state.currentVideo };
};

export default connect(mapStateToProps)(VideoScreen);

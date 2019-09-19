import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchVideos from "../actions/fetchVideos";

const VideoItem = (props) => {
	useEffect(() => {
		props.fetchVideos("nba");
	}, []);

	const renderVideo = () => {
		if (props.videos.length !== 0) {
			return props.videos[0].data.items.map((video) => {
				return (
					<div
						className="border rounded m-2"
						key={video.snippet.description}
						id={video.snippet.title}
					>
						<p className="lead">{video.snippet.title}</p>
						<img
							className="m-2 rounded"
							src={video.snippet.thumbnails.medium.url}
							alt={video.id.videoId}
						/>
						<p>{video.snippet.description}</p>
					</div>
				);
			});
		}
	};
	return <div>{renderVideo()}</div>;
};

const mapStateToProps = (state) => {
	return { videos: state.videos };
};

export default connect(
	mapStateToProps,
	{ fetchVideos }
)(VideoItem);

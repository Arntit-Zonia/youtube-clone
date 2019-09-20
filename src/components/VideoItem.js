import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchVideos, fetchVideoIndex } from "../actions/";

const VideoItem = ({ videos, fetchVideos, fetchVideoIndex }) => {
	useEffect(() => {
		fetchVideos("nba");
	}, []);

	const renderVideo = () => {
		if (videos.length !== 0) {
			return videos[0].data.items.map((video, index) => {
				return (
					<div
						className="border rounded m-2"
						key={video.snippet.description}
						id={index}
					>
						<p id={index} className="lead">
							{video.snippet.title}
						</p>
						<img
							id={index}
							className="m-2 rounded"
							src={video.snippet.thumbnails.medium.url}
							alt={video.id.videoId}
						/>
						<p id={index}>{video.snippet.description}</p>
					</div>
				);
			});
		}
	};
	return (
		<div onClick={(e) => fetchVideoIndex(parseInt(e.target.id))}>
			{renderVideo()}
		</div>
	);
};

const mapStateToProps = (state) => {
	return { videos: state.videos };
};

export default connect(
	mapStateToProps,
	{ fetchVideos, fetchVideoIndex }
)(VideoItem);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchVideos, fetchVideoIndex } from "../actions/";

const VideoItem = ({ videos, fetchVideos, fetchVideoIndex }) => {
	useEffect(() => {
		fetchVideos("books");
	}, []);

	const renderVideo = () => {
		if (videos.length !== 0) {
			return videos[0].data.items.map((video, index) => {
				return (
					<div
						onClick={(e) => fetchVideoIndex(parseInt(e.target.id))}
						className="video-item text-center m-2 card mt-4"
						key={video.snippet.description}
						id={index}
					>
						<p
							id={index}
							className="video-item-title lead card-title p-2"
						>
							{video.snippet.title}
						</p>
						<img
							id={index}
							className="m-2 rounded"
							src={video.snippet.thumbnails.medium.url}
							alt={video.id.videoId}
						/>
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
	{ fetchVideos, fetchVideoIndex }
)(VideoItem);

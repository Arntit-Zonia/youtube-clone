import React, { useEffect } from "react";
import { connect } from "react-redux";
import decode from "unescape";
import { fetchVideos, fetchVideoIndex } from "../actions/";

const VideoItem = ({ videos, fetchVideos, fetchVideoIndex }) => {
	useEffect(() => {
		fetchVideos("books");
	}, []);

	const renderVideo = () => {
		if (videos.length) {
			return videos[0].data.items.map((video, index) => {
				return (
					<div
						//grabs the index value from a video in order to display it at VideoScreen
						onClick={(e) => fetchVideoIndex(e.target.id)}
						className="video-item text-center card mx-3 my-2"
						key={video.snippet.description}
						id={index}
					>
						<p
							id={index}
							className="video-item-title lead card-title p-2"
						>
							{decode(video.snippet.title, "all")}
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

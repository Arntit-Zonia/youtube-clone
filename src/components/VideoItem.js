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
						onClick={(e) => fetchVideoIndex(parseInt(e.target.id))}
						className="card m-2"
						key={video.snippet.description}
						id={index}
					>
						<div id={index} className="card-body">
							<p id={index} className="card-title lead ">
								{video.snippet.title}
							</p>
							<img
								id={index}
								className="m-2 rounded"
								src={video.snippet.thumbnails.medium.url}
								alt={video.id.videoId}
							/>
							{/* <p className="card-text w-50" id={index}>
								{video.snippet.description}
							</p> */}
						</div>
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

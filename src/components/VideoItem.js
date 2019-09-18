import React from "react";
import { connect } from "react-redux";

const VideoItem = (props) => {
	const renderVideo = () => {
		if (props.videos.length !== 0) {
			console.log(props.videos[0].data.items);
			return props.videos[0].data.items.map((video) => {
				return (
					<div className="border rounded m-2" key={video.id.videoId}>
						<p className="lead">{video.snippet.title}</p>
						<img
							className="my-2"
							src={video.snippet.thumbnails.high.url}
							alt={video.snippet.title}
						/>
						<p>{video.snippet.description}</p>
					</div>
				);
			});
		}
	};
	return <div>{renderVideo() ? renderVideo() : "Loading Videos..."}</div>;
};

const mapStateToProps = (state) => {
	return { videos: state.videos };
};

export default connect(mapStateToProps)(VideoItem);

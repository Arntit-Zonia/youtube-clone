import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ getIndex }) => {
	return <VideoItem getIndex={getIndex} />;
};

export default VideoList;

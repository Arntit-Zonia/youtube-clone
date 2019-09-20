import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchVideos, fetchVideoIndex } from "../actions/";

const renderInput = ({ input }) => {
	return <input type="text" placeholder="Search" {...input} />;
};

const SearchInput = ({ fetchVideos, fetchVideoIndex, handleSubmit }) => {
	const onSubmit = async (value) => {
		await fetchVideos(value);

		// resets the index so the first video is always displayed by default
		fetchVideoIndex(0);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field name="search" component={renderInput} />
		</form>
	);
};

const formWrapped = reduxForm({ form: "searchInput" })(SearchInput);

export default connect(
	null,
	{ fetchVideos, fetchVideoIndex }
)(formWrapped);

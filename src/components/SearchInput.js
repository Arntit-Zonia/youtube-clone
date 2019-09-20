import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { fetchVideos } from "../actions/";

const renderInput = ({ input }) => {
	return <input type="text" placeholder="Search" {...input} />;
};

const SearchInput = (props) => {
	const { handleSubmit } = props;

	const onSubmit = (value) => {
		props.fetchVideos(value);
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
	{ fetchVideos }
)(formWrapped);

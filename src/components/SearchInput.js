import React from "react";
import { Field, reduxForm } from "redux-form";

const renderInput = ({ input }) => {
	return <input type="text" placeholder="Search" {...input} />;
};

const SearchInput = (props) => {
	const { handleSubmit } = props;

	const onSubmit = (value) => {
		console.log(value);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field name="search" component={renderInput} />
		</form>
	);
};

export default reduxForm({ form: "searchInput" })(SearchInput);

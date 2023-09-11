export function unprocessableEntityError() {
	return {
		type: "error_unprocessable_entity",
		// message: `Could not find specified "${entity}"!`
	};
}

export function badRequestError() {
	return {
		type: "error_bad_request",
		// message: `Could not find specified "${entity}"!`
	};
}
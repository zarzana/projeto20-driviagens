import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
	if (error.type === "error_unprocessable_entity") return res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY);
	if (error.type === "error_bad_request") return res.sendStatus(httpStatus.BAD_REQUEST);
	if (error.type === "error_conflict") return res.sendStatus(httpStatus.CONFLICT);
	if (error.message === `duplicate key value violates unique constraint "cities_name_key"`) return res.sendStatus(httpStatus.CONFLICT);

	return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
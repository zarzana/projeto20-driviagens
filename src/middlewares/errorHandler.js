import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
	if (error.type === "error_unprocessable_entity") return res.sendStatus(httpStatus.UNPROCESSABLE_ENTITY);
	if (error.type === "error_bad_request") return res.sendStatus(httpStatus.BAD_REQUEST);

	return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
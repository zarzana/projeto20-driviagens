import { unprocessableEntityError } from "../utils/errorFunctions.js";
import { flightSchema } from "./schemas/flightsSchema.js";

export function flightValidator(req, res, next) {

    const validation = flightSchema.validate(req.body);

    if (validation.error) throw unprocessableEntityError();

    next();

}
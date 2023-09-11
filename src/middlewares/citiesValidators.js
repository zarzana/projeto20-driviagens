import { unprocessableEntityError } from "../utils/errorFunctions.js";
import { cityNameSchema } from "./schemas/citiesSchemas.js";

export function cityNameValidator(req, res, next) {

    const validation = cityNameSchema.validate(req.body);

    if (validation.error) throw unprocessableEntityError();

    next();

}
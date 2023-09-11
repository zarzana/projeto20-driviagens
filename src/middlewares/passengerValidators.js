import { unprocessableEntityError } from "../utils/errorFunctions.js";
import { passengerNameSchema } from "./schemas/passengerSchemas.js";

export function passengerNameValidator(req, res, next) {

    const validation = passengerNameSchema.validate(req.body);

    if (validation.error) throw unprocessableEntityError();

    next();

}
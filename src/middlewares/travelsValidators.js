import { unprocessableEntityError } from "../utils/errorFunctions.js";
import { travelSchema } from "./schemas/travelSchema.js";

export function travelValidator(req, res, next) {

    const validation = travelSchema.validate(req.body);

    if (validation.error) throw unprocessableEntityError();

    next();

}
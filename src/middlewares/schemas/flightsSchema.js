import joi from "joi";

export const flightSchema = joi.object({
    'origin': joi.number().required(),
    'destination': joi.number().required(),
    'date': joi.string().regex(/^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/).required(),
});
import joi from "joi";

export const cityNameSchema = joi.object({
    'name': joi.string().min(2).max(50).required(),
});
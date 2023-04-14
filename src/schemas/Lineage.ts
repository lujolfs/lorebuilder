import joi from "joi";

export const lineageSchema = joi.object({
    name: joi.string().min(3).required(),
    maxAge: joi.number().required(),
    adultAge: joi.number().required(),
    isPlayable: joi.boolean(),
    description: joi.string().max(500)
})

export const lineageSchemaUpdate = joi.object({
    name: joi.string().min(3),
    maxAge: joi.number(),
    adultAge: joi.number(),
    isPlayable: joi.boolean(),
    description: joi.string().max(500)
})
const Joi = require('joi');

module.exports = {
    name: Joi.string()
        .required(),

    nickname: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
};

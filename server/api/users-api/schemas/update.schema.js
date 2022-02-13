const Joi = require('joi');

module.exports = {
    name: Joi.string()
        .optional(),

    nickname: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .optional()
        .error(new Error({'details': 'nickname is required'})),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .optional()
};

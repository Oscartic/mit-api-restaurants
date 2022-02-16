const Joi = require('joi');

module.exports = {
    name: Joi.string(),

    description: Joi.string()
        .min(20)
        .max(350),

    imageUrl: Joi.string(),
};

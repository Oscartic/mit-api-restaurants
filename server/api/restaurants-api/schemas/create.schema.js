const Joi = require('joi');

module.exports = {
    name: Joi.string()
        .required(),

    description: Joi.string()
        .min(20)
        .max(350)
        .required(),

    imageUrl: Joi.string()
        .required(),
    
    dishes: Joi.array(),
};

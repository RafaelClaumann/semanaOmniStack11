const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    body() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                description: Joi.string().required(),
                value: Joi.number()
            })
        });
    },

    header() {
        return celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required().length(8)
            }).unknown()
        });
    },

    routeParam() {
        return celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required()
            })
        });
    }
}

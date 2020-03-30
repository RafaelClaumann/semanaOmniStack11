const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    body() {
        return celebrate({
            [Segments.BODY]: Joi.object().keys({
                id: Joi.string().required().length(8)
            })
        });
    }
}

const Joi = require("joi");

const registervalidate = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(5).max(15).required(),
		email: Joi.string().min(6).required().email(),
		qualif:Joi.string().required(),
		gender:Joi.string().required(),
		image:Joi.string().required()
	});
	return schema.validate(data);
};

module.exports.registervalidate = registervalidate;
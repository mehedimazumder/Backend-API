const Joi = require('@hapi/joi');

//SignUp validaion
const signupValidation = (data) =>{
  const schema = Joi.object({
    username: Joi
                .string()
                .required()
                .max(255),
    password: Joi
                .string()
                .required()
                .min(8)
  });
  return schema.validate(data);
}



//login validation
const loginValidation = (data) =>{
  const schema = Joi.object({
    username: Joi
                .string()
                .required()
                .max(255),
    password: Joi
                .string()
                .required()
                .min(8)
  });
  return schema.validate(data);
}

module.exports.signupValidation = signupValidation;
module.exports.loginValidation = loginValidation;

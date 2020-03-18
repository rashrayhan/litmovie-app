//VALIDATION
const joi = require('@hapi/joi');

//Register validation

const registerValidation = data => {

  const schema = joi.object({
    name: joi.string().min(1).required(),
    lastname: joi.string().min(1).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),

  });


  //Lets validate data
  return schema.validate(data);

}


const loginValidation = data => {

  const schema = joi.object({
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
  });


  //Lets validate data
  return schema.validate(data);

}

const topicValidation = data => {

  const schema = joi.object({
    title: joi.string().required(),
    category: joi.string().required(),
  });


  //Lets validate data
  return schema.validate(data);

}
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.topicValidation = topicValidation;
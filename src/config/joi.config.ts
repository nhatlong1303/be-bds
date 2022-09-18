import Joi from 'joi';
const validationEnv = {
  PORT: Joi.number().default(5000),
  MONGO_URL: Joi.string().required(),
  PRIVATE_KEY: Joi.string().required(),
};

export default validationEnv;

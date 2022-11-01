import Joi from "joi";

const userModel = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  state: Joi.string().required(),
  city: Joi.string().required(),
  hobbies: Joi.array().required(),
});

export default userModel;

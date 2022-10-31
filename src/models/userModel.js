import Joi from "joi";

const userModel = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  hobbies: Joi.array().required(),
});

export default userModel;

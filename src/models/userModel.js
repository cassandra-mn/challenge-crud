import Joi from "joi";

const userModel = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  hobbies: Joi.string().required(),
});

export default userModel;

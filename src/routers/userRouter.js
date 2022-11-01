import { Router } from "express";
import * as userController from "../controllers/userController.js";
import validateModelMiddleware from "../middlewares/validateModelMiddleware.js";
import userModel from "../models/userModel.js";

const userRouter = Router();

userRouter.post("/user", validateModelMiddleware(userModel), userController.create);
userRouter.get("/user", userController.findUsers);
userRouter.get("/user/:id", userController.findById);
userRouter.put("/user/:id", userController.update);
userRouter.delete("/user/:id", userController.remove);
userRouter.get("/hobbies", userController.findHobbies);

export default userRouter;

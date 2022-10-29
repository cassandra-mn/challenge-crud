import {Router} from 'express';
import * as userController from '../controllers/userController.js';
import validateModelMiddleware from '../middlewares/validateModelMiddleware.js';
import userModel from '../models/userModel.js';

const userRouter = Router();

userRouter.get('/hello', userController.hello);
userRouter.post('/user', validateModelMiddleware(userModel), userController.create);
userRouter.get('/user', userController.findUsers);
userRouter.get('/user/:id', userController.findById);

export default userRouter;
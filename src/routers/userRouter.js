import {Router} from 'express';
import * as userController from '../controllers/userController.js';

const userRouter = Router();

userRouter.get('/hello', userController.hello);

//userRouter.post('/user/create', );

export default userRouter;
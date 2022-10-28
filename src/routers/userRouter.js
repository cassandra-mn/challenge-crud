import {Router} from 'express';

const userRouter = Router();

userRouter.get('/hello', 
    (req, res, next) => {
        console.log('Logger invoked', req.body);
        next();
    }, function (req, res) {
        res.json({message:  'hello back'});
    }
);

export default userRouter;
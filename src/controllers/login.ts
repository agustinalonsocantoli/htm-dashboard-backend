import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secretToken = process.env.SECRET_KEY === undefined ? 'TOP_SECRET' : process.env.SECRET_KEY


const loginController = {

    login: (req: Request, res: Response, next: NextFunction): Response | void => {
        passport.authenticate('login', 
        async (err: any, user: any) => {
            try{
                if(err || !user){
                    const error = new Error('An error occurred')

                    return next(error)
                }

                req.login(
                    user,
                    {session: false},
                    async (err) => {
                        if(err) return next(err)

                        const body = { _id: user._id, email: user.email };
                        const token = jwt.sign({ user: body }, secretToken);

                        return res.json({ token });
                    }
                );
            } catch(err) {
                return next(err)
            }
        }) (req, res, next)
    }
}

export default loginController;
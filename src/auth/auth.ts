import passport from 'passport';
import { Strategy as localStrategy } from 'passport-local';
import { IUser } from '../models/userAuth';
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';
import 'dotenv/config';

const userAuth: IUser = {
    email: 'agustin@hm.com',
    password: '000000',
}

passport.use('login', 
    new localStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email: string, password: string, done: Function) => {
        try{
            if(userAuth.email === email && userAuth.password === password) {
                return done(null, userAuth, {message: "Login successful"})
            }

            return done(null, false, {message: "Email or Password is wrong"})
        } catch(err) {
            done(err);
        }

    })
);

passport.use(
    new JWTstrategy({
        secretOrKey: process.env.SECRET_KEY,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async (token: any, done: Function) => {
        try{
            return done(null, token.user)
        } catch(err) {
            done(err);
        }
    })
);
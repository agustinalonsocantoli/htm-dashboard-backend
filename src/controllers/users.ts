import { Request, Response, NextFunction } from 'express';
import User, { IntUser } from '../models/users';
import { dbConnection, dbEnd } from '../database';
import { encryptPassword } from '../seed';

const usersController = {

    getUsers: async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const users: IntUser[] | unknown = await User.find()
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.json(users);

        } catch (err) {
            next(err);
            res.send({message: err});
        }
        
        await dbEnd();
    },
    getUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const user: IntUser | unknown = await User.findOne({id: req.params.id})
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.json(user);

        } catch (err) {
            next(err);
            res.send({message: err});
        }
        
        await dbEnd();
    },
    newUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const hash = encryptPassword(req.body.password)

        const newUser: IntUser | {} = {
            id: req.body.id,
            src: req.body.src,
            name: req.body.name,
            email: req.body.email,
            start: req.body.start,
            job: req.body.job,
            contact: req.body.contact,
            status: req.body.status,
            password: hash,
        }

        await User.create(newUser)
        .catch((e) => next(e));

        try {
            res.status(200).json(newUser)

        } catch (err) {
            next(err);
            res.send({message: err});
        }
        
        await dbEnd();
    },
    uptadeUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const hash = encryptPassword(req.body.password)

        const editUser: IntUser | {} = {
            src: req.body.src,
            name: req.body.name,
            email: req.body.email,
            start: req.body.start,
            job: req.body.job,
            contact: req.body.contact,
            status: req.body.status,
            password: hash,
        }

        await User.findOneAndUpdate({id: req.params.id}, editUser)
        .catch((e) => next(e));

        try {
            res.status(200).json({
                message: `Edit user Id-${req.params.id}`,
                update: editUser
            })

        } catch (err) {
            next(err);
            res.send({message: err});
        }
        
        await dbEnd();
    },
    deleteUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        await User.findOneAndDelete({id: req.params.id})
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.status(200).json({message: `User Id-${req.params.id} deleted successfully`})

        } catch (err) {
            next(err);
            res.send({message: err});
        }
        
        await dbEnd();
    },
}

export default usersController;
import { Request, Response, NextFunction } from 'express';
import { dbQuery } from '../database';
import { User } from '../models/users';

const usersController = {

    getUsers: async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            const usersData: User | unknown = await dbQuery('SELECT * FROM users')

            res.json(usersData);
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
    getUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            const userData: User | unknown = await dbQuery('SELECT * FROM users WHERE id = ?', req.params.id)

            res.json(userData);
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
    newUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            await dbQuery('INSERT INTO users SET ?', req.body)

            res.json ({success: true, message: `Create New User ${req.body}`});
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
    uptadeUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            await dbQuery('UPDATE users SET ? WHERE id = ?', [req.body, req.params.id])

            res.json ({success: true, message: `User ${req.params.id} update succesfully`})
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
    deleteUser: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            await dbQuery('DELETE FROM users WHERE id = ?', req.params.id)

            res.json ({success: true, message: `Room ${req.params.id} delete`});
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
}

export default usersController;
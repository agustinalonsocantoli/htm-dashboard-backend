import usersData from '../JSON/DataUsers.json';
import { Request, Response } from 'express';

const usersController = {

    getUsers: (_req: Request, res: Response): Response | void => {
        try{

            return res.json({users: usersData});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    getUser: (req: Request, res: Response): Response | void => {
        try{

            return res.json({user: usersData.find(user => user.id === req.params.id)});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    newUser: (req: Request, res: Response): Response | void => {
        try{

            return res.json ({success: true, user: req.body});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    uptadeUser: (_req: Request, res: Response): Response | void => {
        try{

            return res.json ({success: true});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    deleteUser: (_req: Request, res: Response): Response | void => {
        try{

            return res.json ({success: true});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
}

export default usersController;
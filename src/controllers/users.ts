import usersData from '../JSON/DataUsers.json';
import { User } from '../models/users';

let usersController = {

    getUsers: async (_req: any, res: any): Promise<User[]> => {
        const data = await res.json({users: usersData});

        return data
    },
    getUser: async (req: any, res: any): Promise<User> => {
        const data = await res.json({user: usersData.find(user => user.id === req.params.id)});

        return data
    },
    newUser: async (req: any, res: any): Promise<User> => {
        const data = await res.json ({success: true, user: req.body});

        return data
    },
    uptadeUser: async (_req: any, res: any): Promise<User> => {
        const data = await res.json ({success: true});

        return data
    },
    deleteUser: async (_req: any, res: any): Promise<User> => {
        const data = await res.json ({success: true});

        return data
    },
}

export default usersController;
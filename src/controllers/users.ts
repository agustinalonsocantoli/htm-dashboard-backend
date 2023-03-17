import usersData from '../JSON/DataUsers.json';

const usersController = {

    getUsers: (_req: any, res: any): Response | void => {
        try{

            return res.json({users: usersData});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    getUser: (req: any, res: any): Response | void => {
        try{

            return res.json({user: usersData.find(user => user.id === req.params.id)});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    newUser: (req: any, res: any): Response | void => {
        try{

            return res.json ({success: true, user: req.body});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    uptadeUser: (_req: any, res: any): Response | void => {
        try{

            return res.json ({success: true});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    deleteUser: (_req: any, res: any): Response | void => {
        try{

            return res.json ({success: true});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
}

export default usersController;
import roomsData from '../JSON/DataRooms.json';

const roomsController = {

    getRooms: (_req: any, res: any): Response | void => {
        try{

            return res.json({rooms: roomsData});
        } catch(err) {
            res.send({message: "Error"});
            console.log(err);
        }
    },
    getRoom: (req: any, res: any): Response | void => {
        try{

            return res.json({room: roomsData.find(room => room.id === req.params.id)});
        } catch(err) {
            res.send({message: "Error"});
            console.log(err);
        }
    },
    newRoom: (req: any, res: any): Response | void => {
        try{

            return res.json ({success: true, room: req.body});
        } catch(err) {
            res.send({message: "Error"});
            console.log(err);
        }
    },
    uptadeRoom: (_req: any, res: any): Response | void => {
        try{

            return res.json ({success: true});
        } catch(err) {
            res.send({message: "Error"});
            console.log(err);
        }
    },
    deleteRoom: (_req: any, res: any): Response | void => {
        try{

            return res.json ({success: true});
        } catch(err) {
            res.send({message: "Error"});
            console.log(err);
        }
    },
}

export default roomsController;
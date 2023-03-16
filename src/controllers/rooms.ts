import roomsData from '../JSON/DataRooms.json';
import { Room } from '../models/rooms';

let roomsController = {

    getRooms: async (_req: any, res: any): Promise<Room[]> => {
        const data = await res.json({rooms: roomsData});

        return data
    },
    getRoom: async (req: any, res: any): Promise<Room> => {
        const data = await res.json({room: roomsData.find(room => room.id === req.params.id)});

        return data
    },
    newRoom: async (req: any, res: any): Promise<Room> => {
        const data = await res.json ({success: true, room: req.body});

        return data
    },
    uptadeRoom: async (_req: any, res: any): Promise<Room> => {
        const data = await res.json ({success: true});

        return data
    },
    deleteRoom: async (_req: any, res: any): Promise<Room> => {
        const data = await res.json ({success: true});

        return data
    },
}

export default roomsController;
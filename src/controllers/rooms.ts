import { Rooms } from '../models/rooms';

let roomsController = {

    getRooms: async function(req: any, res: any): Rooms {
        return res.json();
    },
    getRoom: async function(req: any, res: any) {},
    newRoom: async function(req: any, res: any) {},
    uptadeRoom: async function(req: any, res: any) {},
    deleteRoom: async function(req: any, res: any) {},
}
import { Request, Response, NextFunction } from 'express';
import { dbQuery } from '../database';
import { Room } from '../models/rooms';

const roomsController = {

    getRooms: async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            const roomsData: Room | unknown = await dbQuery('SELECT * FROM rooms')

            res.json(roomsData);
        } catch(err) {
            next(err);
            res.send({message: err});
        }
    },
    getRoom: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            const roomData: Room | unknown = await dbQuery('SELECT * FROM rooms WHERE id = ?', req.params.id)

            res.json(roomData);
        } catch(err) {
            next(err);
            res.send({message: err});
        }
    },
    newRoom: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            await dbQuery('INSERT INTO rooms SET ?', req.body)

            res.json ({success: true, message: `Create New Room ${req.body}`});
        } catch(err) {
            next(err);
            res.send({message: "Error"});
        }
    },
    uptadeRoom: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            await dbQuery('UPDATE rooms SET ? WHERE id = ?', [req.body, req.params.id])

            res.json ({success: true, message: `Room ${req.params.id} update succesfully`});
        } catch(err) {
            next(err);
            res.send({message: "Error"});
        }
    },
    deleteRoom: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            await dbQuery('DELETE FROM rooms WHERE id = ?', req.params.id)

            res.json ({success: true, message: `Room ${req.params.id} delete`});
        } catch(err) {
            next(err);
            res.send({message: "Error"});
        }
    },
}

export default roomsController;
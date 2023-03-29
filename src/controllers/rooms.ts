import { Request, Response, NextFunction } from 'express';
import Room, { IntRoom } from '../models/rooms';
import { dbConnection, dbEnd } from '../database';

const roomsController = {

    getRooms: async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const rooms: IntRoom[] | unknown = await Room.find()
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.status(200).json({
                message: "Rooms obtained successfully",
                data: rooms
            });

        } catch (err) {
            next(err);
            res.status(500).send({message: err});
        }
        
        await dbEnd();
    },
    getRoom: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const room: IntRoom | unknown = await Room.findOne({id: req.params.id})
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.status(200).json({
                message: "Room obtained successfully",
                data: room
            });

        } catch (err) {
            next(err);
            res.status(500).send({message: err});
        }
        
        await dbEnd();
    },
    newRoom: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const newRoom: IntRoom | {} = {
            src: req.body.src,
            name: req.body.name,
            id: req.body.id,
            amenities: req.body.amenities,
            type: req.body.type,
            price: req.body.price,
            offer: req.body.offer,
            status: req.body.status,
        }

        await Room.create(newRoom)
        .catch((e) => next(e));

        try {
            res.status(200).json({
                message: "Room created successfully",
                data: newRoom
            })

        } catch (err) {
            next(err);
            res.status(500).send({message: err});
        }
        
        await dbEnd();
    },
    uptadeRoom: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const editRoom: IntRoom | {} = {
            src: req.body.src,
            name: req.body.name,
            id: req.body.id,
            amenities: req.body.amenities,
            type: req.body.type,
            price: req.body.price,
            offer: req.body.offer,
            status: req.body.status,
        }

        await Room.findOneAndUpdate({id: req.params.id}, editRoom)
        .catch((e) => next(e));

        try {
            res.status(200).json({
                message: `Edit room Id-${req.params.id} successfully`,
                data: editRoom
            })

        } catch (err) {
            next(err);
            res.status(500).send({message: err});
        }
        
        await dbEnd();
    },
    deleteRoom: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        await Room.findOneAndDelete({id: req.params.id})
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.status(200).json({
                message: `Room Id-${req.params.id} deleted successfully`
            })

        } catch (err) {
            next(err);
            res.status(500).send({message: err});
        }
        
        await dbEnd();
    },
}

export default roomsController;
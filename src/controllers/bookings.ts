import { Request, Response, NextFunction } from 'express';
import { dbQuery } from '../database';
import { Booking } from '../models/bookings';

const bookingsController = {

    getBookings: async (_req: Request, res: Response, next: NextFunction): Promise<any> => {
        try{
            const bookingsData: Booking | unknown = await dbQuery('SELECT * FROM bookings');

            res.json(bookingsData);
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
    getBook: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try{
            const bookingData: Booking | unknown = await dbQuery('SELECT * FROM bookings WHERE id = ?', req.params.id);

            res.json(bookingData);
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
    newBook: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try{
            await dbQuery('INSERT INTO bookings SET ?', req.body)

            res.json ({success: true, message: `Create New Book ${req.body}`});
        } catch(err) {
            next(err)
            res.send({message: err});
        }

    },
    uptadeBook: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try{
            await dbQuery('UPDATE bookings SET ? WHERE id = ?', [req.body, req.params.id])

            res.json ({success: true, message: `Book ${req.params.id} update succesfully`});
        } catch(err) {
    next(err)           
            res.send({message: err});
        }
    },
    deleteBook: async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try{
            await dbQuery('DELETE FROM bookings WHERE id = ?', req.params.id)

            res.json ({success: true, message: `Book ${req.params.id} delete`});
        } catch(err) {
            next(err)
            res.send({message: err});
        }
    },
}

export default bookingsController;
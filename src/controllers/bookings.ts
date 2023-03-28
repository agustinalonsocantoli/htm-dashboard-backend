import { Request, Response, NextFunction } from 'express';
import Booking, { IntBooking } from '../models/bookings';
import { dbConnection, dbEnd } from '../database';

const bookingsController = {

    getBookings: async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const bookings: IntBooking[] | unknown = await Booking.find()
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.json(bookings);

        } catch (err) {
            next(err);
            res.send({message: err});
        }
        
        await dbEnd();
    },
    getBook: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const book: IntBooking | unknown = await Booking.findOne({id: req.params.id})
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.json(book);

        } catch (err) {
            next(err);
            res.send({message: err});
        }
        
        await dbEnd();
    },
    newBook: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const newBook: IntBooking | {} = {
            src: req.body.src,
            id: req.body.id,
            name: req.body.name,
            date: req.body.date,
            checkin: req.body.checkin,
            checkout: req.body.checkout,
            note: req.body.note,
            type: req.body.type,
            status: req.body.status,
        }

        await Booking.create(newBook)
        .catch((e) => next(e));

        try {
            res.status(200).json(newBook)

        } catch (err) {
            next(err);
            res.send({message: err});
        }
        
        await dbEnd();
    },
    uptadeBook: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        const editBook: IntBooking | {} = {
            src: req.body.src,
            id: req.body.id,
            name: req.body.name,
            date: req.body.date,
            checkin: req.body.checkin,
            checkout: req.body.checkout,
            note: req.body.note,
            type: req.body.type,
            status: req.body.status,
        }

        await Booking.findOneAndUpdate({id: req.params.id}, editBook)
        .catch((e) => next(e));

        try {
            res.status(200).json({
                message: `Edit booking Id-${req.params.id}`,
                update: editBook
            })

        } catch (err) {
            next(err);
            res.send({message: err});
        }
        
        await dbEnd();
    },
    deleteBook: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        await dbConnection();

        await Booking.findOneAndDelete({id: req.params.id})
        .exec()
        .catch((e: Error) => next(e));

        try {
            res.status(200).json({message: `Booking Id-${req.params.id} deleted successfully`})

        } catch (err) {
            next(err);
            res.send({message: err});
        }
        
        await dbEnd();
    },
}

export default bookingsController;
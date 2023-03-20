import bookingsData from '../JSON/DataBookings.json';
import { Request, Response } from 'express';

const bookingsController = {

    getBookings: (_req: Request, res: Response): Response | void => {
        try{
            return res.json({bookings: bookingsData});

            
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    getBook: (req: Request, res: Response): Response | void => {
        try{
            return res.json({book: bookingsData.find(book => book.id === req.params.id)});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    newBook: (req: Request, res: Response): Response | void => {
        try{
            return res.json ({success: true, book: req.body});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }

    },
    uptadeBook: (_req: Request, res: Response): Response | void => {
        try{
            return res.json ({success: true});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    deleteBook: (_req: Request, res: Response): Response | void => {
        try{
            return res.json ({success: true});
        } catch(err) {
            res.send({message: "Error"});
            console.log(err);
        }
    },
}

export default bookingsController;
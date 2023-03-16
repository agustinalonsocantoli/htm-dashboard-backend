import bookingsData from '../JSON/DataBookings.json';
import { Booking } from '../models/bookings';

let bookingsController = {

    getBookings: async (_req: any, res: any): Promise<Booking[]> => {
        const data = await res.json({bookings: bookingsData});

        return data
    },
    getBook: async (req: any, res: any): Promise<Booking> => {
        const data = await res.json({book: bookingsData.find(book => book.id === req.params.id)});

        return data
    },
    newBook: async (req: any, res: any): Promise<Booking> => {
        const data = await res.json ({success: true, book: req.body});

        return data
    },
    uptadeBook: async (_req: any, res: any): Promise<Booking> => {
        const data = await res.json ({success: true});

        return data
    },
    deleteBook: async (_req: any, res: any): Promise<Booking> => {
        const data = await res.json ({success: true});

        return data
    },
}

export default bookingsController;
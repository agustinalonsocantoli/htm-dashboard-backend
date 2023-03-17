import bookingsData from '../JSON/DataBookings.json';

const bookingsController = {

    getBookings: (_req: any, res: any): Response | void => {
        try{
            return res.json({bookings: bookingsData});

            
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    getBook: (req: any, res: any): Response | void => {
        try{
            return res.json({book: bookingsData.find(book => book.id === req.params.id)});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    newBook: (req: any, res: any): Response | void => {
        try{
            return res.json ({success: true, book: req.body});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }

    },
    uptadeBook: (_req: any, res: any): Response | void => {
        try{
            return res.json ({success: true});
        } catch(err) {

            res.send({message: "Error"});
            console.log(err);
        }
    },
    deleteBook: (_req: any, res: any): Response | void => {
        try{
            return res.json ({success: true});
        } catch(err) {
            res.send({message: "Error"});
            console.log(err);
        }
    },
}

export default bookingsController;
import express from "express";
import bookingsController from "../controllers/bookings";

const router = express.Router();

router.get('/', bookingsController.getBookings)

router.get('/:id?', bookingsController.getBook)

router.post('/new-book', bookingsController.newBook)

router.put('/:id', bookingsController.uptadeBook)

router.delete('/:id', bookingsController.deleteBook)

export default router;
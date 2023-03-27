import { model, Schema } from "mongoose";

export interface IntBooking {
    src: String;
    id: Number;
    name: String;
    date: Date;
    checkin: Date;
    checkout: Date;
    note: String;
    type: String;
    status: String;
}

const BookingSchema = new Schema<IntBooking>({
    src: String,
    id: Number,
    name: String,
    date: Date,
    checkin: Date,
    checkout: Date,
    note: String,
    type: String,
    status: String
});

const Booking = model('Booking', BookingSchema);

export default Booking;
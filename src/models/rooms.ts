import { Schema, model } from "mongoose";

export interface IntRoom {
    src: String;
    name: String;
    amenities: Array<String>;
    type: String;
    price: Number;
    offer: Number;
    status: String;
}

const RoomSchema = new Schema<IntRoom>({
    src: String,
    name: String,
    amenities: Array<String>,
    type: String,
    price: Number,
    offer: Number,
    status: String
});

const Room = model('Room', RoomSchema);

export default Room;